const button = document.querySelector('.Share__Button');

/**
 *  EVENTS
 */

button.addEventListener('mouseover',hoverBtn);
button.addEventListener('mouseout',hoverOutBtn);
button.addEventListener('click',clickBtn);

console.log(window.innerWidth)

function hoverOutBtn(e) {

    const path = button.querySelector('path');
    const shareButtonContainer = this.parentElement.querySelector('.Share__Options');

    if( window.innerWidth >= 1024 ) { 

        if ( shareButtonContainer.classList.contains('lg:hidden') ) {
            this.classList.remove('bg-DesaturatedDarkBlue');
            this.classList.add('bg-LightGrayishBlue');
            path.setAttribute('fill','#6E8098');
        } else {
            this.classList.remove('bg-LightGrayishBlue');
            this.classList.add('bg-DesaturatedDarkBlue');
            path.setAttribute('fill','#FFF');
        }

    } else {

        if ( shareButtonContainer.classList.contains('mt-[25%]') ) {
            this.classList.remove('bg-DesaturatedDarkBlue');
            this.classList.add('bg-LightGrayishBlue');
            path.setAttribute('fill','#6E8098');
        } else {
            this.classList.remove('bg-LightGrayishBlue');
            this.classList.add('bg-DesaturatedDarkBlue');
            path.setAttribute('fill','#FFF');
        }
    }



}

function hoverBtn(e) {

    const path = button.querySelector('path');
    const shareButtonContainer = this.parentElement.querySelector('.Share__Options');

    if( window.innerWidth >= 1024 ) {
        

        if ( shareButtonContainer.classList.contains('lg:hidden') ) {
            this.classList.remove('bg-LightGrayishBlue');
            this.classList.add('bg-DesaturatedDarkBlue');
            path.setAttribute('fill','#FFF');
        } else {
            this.classList.remove('bg-DesaturatedDarkBlue');
            this.classList.add('bg-LightGrayishBlue');
            path.setAttribute('fill','#6E8098');
        }
        
    } else {
        
        if ( shareButtonContainer.classList.contains('mt-[25%]') ) {
            this.classList.remove('bg-LightGrayishBlue');
            this.classList.add('bg-DesaturatedDarkBlue');
            path.setAttribute('fill','#FFF');
        } else {
            this.classList.remove('bg-DesaturatedDarkBlue');
            this.classList.add('bg-LightGrayishBlue');
            path.setAttribute('fill','#6E8098');
        }
    
    }

}

function clickBtn(e) {

    const path = button.querySelector('path');
    const shareButtonContainer = this.parentElement.querySelector('.Share__Options');
    const personContainer = this.parentElement.querySelector('.img__picture');

    
    if( window.innerWidth >= 1024 ) {
        
        if ( shareButtonContainer.classList.contains('lg:hidden') ) {
            
            shareButtonContainer.classList.remove('lg:hidden');

            this.classList.contains('bg-DesaturatedDarkBlue') ?
            this.classList.remove('bg-DesaturatedDarkBlue'):
            this.classList.add('bg-DesaturatedDarkBlue');

            this.classList.contains('bg-LightGrayishBlue') ?
            this.classList.remove('bg-LightGrayishBlue'):
            this.classList.add('bg-LightGrayishBlue');

            path.setAttribute('fill','#6E8098');
            
            setTimeout(()=>{
                this.classList.remove('bg-LightGrayishBlue');
                this.classList.add('bg-DesaturatedDarkBlue');
                path.setAttribute('fill','#FFF');
            },50);
            
        } else {
            shareButtonContainer.classList.add('lg:hidden');
            
            this.classList.contains('bg-DesaturatedDarkBlue') ?
            this.classList.remove('bg-DesaturatedDarkBlue'):
            this.classList.add('bg-DesaturatedDarkBlue');

            path.setAttribute('fill','#FFF');
            
            setTimeout(()=>{
                this.classList.remove('bg-DesaturatedDarkBlue');
                this.classList.add('bg-LightGrayishBlue');
                path.setAttribute('fill','#6E8098');
            },50);
        }

    } else {
        
        personContainer.classList.toggle('mb-1');
        
        if ( shareButtonContainer.classList.contains('mt-[25%]') ) {
            
            shareButtonContainer.classList.remove('mt-[25%]');

            this.classList.contains('bg-DesaturatedDarkBlue') ?
            this.classList.remove('bg-DesaturatedDarkBlue'):
            this.classList.add('bg-DesaturatedDarkBlue');

            this.classList.contains('bg-LightGrayishBlue') ?
            this.classList.remove('bg-LightGrayishBlue'):
            this.classList.add('bg-LightGrayishBlue');

            path.setAttribute('fill','#6E8098');
            
            setTimeout(()=>{
                this.classList.remove('bg-LightGrayishBlue');
                this.classList.add('bg-DesaturatedDarkBlue');
                path.setAttribute('fill','#FFF');
            },50);
            
        } else {
            shareButtonContainer.classList.add('mt-[25%]');
            
            this.classList.contains('bg-DesaturatedDarkBlue') ?
            this.classList.remove('bg-DesaturatedDarkBlue'):
            this.classList.add('bg-DesaturatedDarkBlue');

            path.setAttribute('fill','#FFF');
            
            setTimeout(()=>{
                this.classList.remove('bg-DesaturatedDarkBlue');
                this.classList.add('bg-LightGrayishBlue');
                path.setAttribute('fill','#6E8098');
            },50);
        }
    }


}