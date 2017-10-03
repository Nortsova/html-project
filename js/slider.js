'use strict';

class Slider {
	constructor(sliderQuery) {
		this.slider = document.querySelector(sliderQuery);
		this.sliderItems = this.slider.children;
		this.sliderItemsLength = this.sliderItems.length;
		this.prev = this.slider.parentElement.querySelector('.prev');
		this.next = this.slider.parentElement.querySelector('.next');
		this.itemWidth = this.slider.parentElement.offsetWidth;

		this.position = 0;
		this.buildFirstStatement();

		this.next.addEventListener('click', (e) => {
			e.preventDefault();
			this.nextSlide();
		});
		this.prev.addEventListener('click', (e) => {
			e.preventDefault();
			this.prevSlide();
		});
	}

	buildFirstStatement() {
		this.slider.style.width = (this.itemWidth * this.sliderItems.length) + 'px';
		this.slider.style.transition = 'transform .5s ease-in-out';
		for (let i = 0; i < this.sliderItemsLength; i++) {
			this.sliderItems[i].style.width = this.itemWidth + 'px';
		}
	}

	nextSlide() {
		this.position = this.checkIsPositionInSlide(this.position + this.itemWidth);
		this.updatePosition();
	}
	prevSlide() {
		this.position = this.checkIsPositionInSlide(this.position - this.itemWidth);
		this.updatePosition();
	}

	checkIsPositionInSlide(newPosition) {
		return ((newPosition < 0) || (newPosition >= this.slider.offsetWidth)) ? this.position : newPosition;
	}

	updatePosition() {
		this.slider.style.transform = `translateX(-${this.position}px)`;
	}

}
