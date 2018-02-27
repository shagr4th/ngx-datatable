import {Directive, ElementRef, Input, Renderer} from '@angular/core';


function isBlank(obj: any): boolean {
  return obj === undefined || obj === null;
}

@Directive({selector: '[hide]'})
export class HideDirective {

  private _prevCondition: boolean = null;
  private _displayStyle: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
  }

  @Input()
  set hide(newCondition: boolean) {
    this.initDisplayStyle();

    if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
      this._prevCondition = true;
      this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'none');
    } else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
      this._prevCondition = false;
      this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', this._displayStyle);
    }
  }

  private initDisplayStyle() {
    if (this._displayStyle === undefined) {
      let displayStyle = this._elementRef.nativeElement.style.display;
      if (displayStyle && displayStyle !== 'none') {
        this._displayStyle = displayStyle;
      }
    }
  }
}
