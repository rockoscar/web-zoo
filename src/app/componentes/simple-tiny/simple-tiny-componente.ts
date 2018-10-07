import {
	Component,
	OnDestroy,
	OnChanges,
	AfterViewInit,
	EventEmitter,
	Input,
	Output
} from "@angular/core";

declare var tinymce: any;

@Component({
	selector: "simple-tiny",
	template: `<textarea id="{{elementId}}">{{content}}</textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
	@Input() elementId: string;
	@Input() content: string;
	@Output() onEditorChange = new EventEmitter<any>();

	editor;

	ngAfterViewInit() {
		tinymce.init({
			selector: `#${this.elementId}`,
			plugins: ["link paste table autoresize charmap searchreplace lists advlist textcolor colorpicker code"],
			skin_url: "/node_modules/tinymce/skins/lightgray",
			menubar: "edit insert view format table tools",
			setup: editor => {
				this.editor = editor;
				editor.on("Change", () => {
					const content = editor.getContent();
					this.onEditorChange.emit(content);
				});
			}
		});
	}

	ngOnDestroy() {
		tinymce.remove(this.editor);
	}
}