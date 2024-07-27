import NoteContextAwareWidget from "./note_context_aware_widget.js";
import toastService from "../services/toast.js";
export default class countDownWidget extends NoteContextAwareWidget {
    get position() {
        return 100;
    }
    get parentWidget() {
        return 'center-pane';
    }

    isEnabled() {
        return super.isEnabled();
    }

    doRender() {
        this.$widget = $(``);
        return this.$widget;
    }

    async refreshWithNote(note) {
        // only execute in text note
        if (note.type !== 'text') {
            return;
        }

        $(document).ready(function () {
            let container = $("div.note-split:not(.hidden-ext) > div.scrolling-container > div.note-detail");

            function performOperationWhenReady(container) {
                // pinpoint code blocks
                container.find("pre:not(.CodeMirror-line, .CodeMirror-line-like)").each(function() {

                    let _this = $(this)[0];

                    // copy on double click
                    // unbind first, prevent duplicated event binding
                    $(this).off('dblclick').on('dblclick', function() {
                        // extract code block data
                        let codeContent = _this.innerText;
                        navigator.clipboard.writeText(codeContent);
                        toastService.showMessage("成功复制");
                    });
                });
            }
            // wait for editor load the content, prevent unexpected things
            setTimeout(performOperationWhenReady, 200, container);
        });
    }
}