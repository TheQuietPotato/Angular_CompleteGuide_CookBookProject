import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';



@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
    constructor(private elRef: ElementRef, private rederer: Renderer2) { }
    isOpen = false;

    childElementReferene: HTMLElement;

    ngOnInit() {
        for (const [key, value] of Object.entries(this.elRef.nativeElement.childNodes)) {
            const node = value as HTMLElement;
            if (node.classList.contains('dropdown-menu')) {
                this.childElementReferene = node;
            }
        }
    }

    @HostListener('mouseup') toggleOpen() {
        if (this.isOpen) {
            this.isOpen = false;
            this.rederer.removeClass(this.childElementReferene, 'show');
        } else {
            this.isOpen = true;
            this.rederer.addClass(this.childElementReferene, 'show');
        }
    }
}
