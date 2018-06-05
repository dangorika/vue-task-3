import Splitter from 'split-html-to-chars';
import {TimelineMax} from 'gsap';

export const PageTransition = {
  mounted() {
    let heading = this.$el.querySelectorAll('h1');
    heading.forEach(letter => {
      letter.outerHTML = Splitter(letter.outerHTML, '<span class="letter">$</span>');
    })
  },
  transition: {
    name: 'stagger',
    mode: 'out-in',
    css: false,
    enter: (el, done)=> {
      let tl = new TimelineMax({onComplete: done});

      let letter = el.querySelectorAll('.letter');
      let text = el.querySelectorAll('p');
      tl
        .staggerFromTo(letter, 0.25, {y: 10, opacity: 0, rotation: -1}, {y: 0, opacity: 1, rotation: 0, ease: Back.easeOut.config(1.7)}, 0.05)
        .fromTo(text, 0.4, {y: 20, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(1.7)}, '-=.25');

    },
    leave: (el, done)=> {
      let tl = new TimelineMax({onComplete: done});

      let letter = el.querySelectorAll('.letter');
      let text = el.querySelectorAll('p');

      tl
        .staggerFromTo(letter, 0.25, {y: 0, opacity: 1, rotation: 0}, {y: 10, opacity: 0, rotation: -1, ease: Back.easeOut.config(1.7)}, 0.05)
        .fromTo(text, 0.4, {y: 0, opacity: 1}, {y: 20, opacity: 0, ease: Back.easeOut.config(1.7)}, '-=.25');

    }
  }
}
