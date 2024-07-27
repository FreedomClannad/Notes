import NoteContextAwareWidget from "./note_context_aware_widget.js";
import libraryLoader from "../services/library_loader.js";
// import "ketcher-react/dist/index.css";
// const ketcherCore = require("ketcher-core")
// import { RemoteStructServiceProvider} from "ketcher-core";
// import { Editor } from "ketcher-react";
// const ketcherReact = require("ketcher-react");
// const structServiceProvider = new RemoteStructServiceProvider("/v2");
const styles = `
.ketcher-box {
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
}
#ketcher-draw {
    width: 100%;
    height: 100%;
}
`

// const TPL = `<div class="ketcher-box"><div id="ketcher-draw"></div>
// </div>`

const TPL = `<div class="ketcher-box"><iframe id="ketcher-draw" src="http://localhost:1023/ketcher/"></iframe>
</div>`

export default class KetcherWidget extends NoteContextAwareWidget {
    get position() { return 200; }
    get parentWidget() { return "center-pane"; }
    constructor() {
        super();
    }
    isEnabled() {
        return super.isEnabled();
    }
    doRender() {
        this.$widget = $(TPL);
        this.cssBlock(styles);
        console.log(window);
        console.log(window.React);
        libraryLoader
            .requireLibrary(libraryLoader.KETCHER)
            .then(() => {
                // console.log(window);
                // const React = window.React;
                // console.log(React);
                // const ReactDOM = window.ReactDOM;

                // const renderElement = this.$widget.find("#ketcher-draw").get(0);
                // ReactDOM.unmountComponentAtNode(renderElement);
                // console.log(renderElement);
                // const root = ReactDOM.createRoot(renderElement);
                // console.log(root);
                // root.render(React.createElement(() => this.createReactKetcherApp()));
            });

        return this.$widget;
    }

    createReactKetcherApp() {
        const React = window.React;
        const Editor = window.Editor;
        // const structServiceProvider = new window.RemoteStructServiceProvider("/v2");
        // return React.createElement(Editor, {staticResourcesUrl: "./", structServiceProvider: structServiceProvider})
        const [ketcher, setKetcher] = React.useState();
        const clear = () => {
            ketcher.editor.clear
        }
        return React.createElement(Editor, {staticResourcesUrl: "./", structServiceProvider: {apiPath: "/v2/", customHeaders: undefined, mode: "remote"}, errorHandler: function (message) {
                console.log(message.toString());
            }, onInit: function (ketcher) {
                window.ketcher1 = ketcher;
                setKetcher(ketcher);
                ketcher.editor.subscribe("change", () => {
                    ketcher.getSmiles(true).then(smiles_data => {
                        let smiles = null;
                        // 这里是判断超原子的问题
                        let index = smiles_data.indexOf("|");
                        if (index !== -1) {
                            smiles = smiles_data.substring(0, index);
                        } else {
                            smiles = smiles_data;
                        }
                        console.log(smiles);
                    });
                });

            }})
    }
}