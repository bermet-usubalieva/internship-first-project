export function createFooter() {
    const footer = document.createElement('footer')
    footer.className = 'footer'
    const footerTop = document.createElement('div')
    footerTop.className = 'footerTop'
    const footerTitle = document.createElement('h2')
    footerTitle.className = 'footerTitle'
    footerTitle.textContent = 'Get the right plan for future product.'
    const footerBtnWrap = document.createElement('div')
    footerBtnWrap.className = 'footerBtnWrap'
    const footerBtnLeft = document.createElement('button')
    footerBtnLeft.className = 'footerBtnLeft'
    footerBtnLeft.textContent = 'Yearly'
    const footerBtnRight = document.createElement('button')
    footerBtnRight.className = 'footerBtnRight'
    footerBtnRight.textContent = 'Monthly'


    const footerBottom = document.createElement('div')
    footerBottom.className = 'footerBottom'

    const footerTextLeft = document.createElement('div')
    footerTextLeft.className = 'footerTextLeft'
    const footerTextLeftWord1 = document.createElement('p')
    footerTextLeftWord1.className = 'footerTextLeftWord'
    footerTextLeftWord1.textContent = 'Starter'

    const footerTextLeftTitle = document.createElement('p')
    footerTextLeftTitle.className = 'footerTextLeftTitle'
    footerTextLeftTitle.textContent = 'Free'

    const footerTextLeftWord2 = document.createElement('p')
    footerTextLeftWord2.textContent = '1 Website'
    footerTextLeftWord2.className = 'footerTextLeftWord'

    const footerTextLeftWord3 = document.createElement('p')
    footerTextLeftWord3.textContent = '5 GB Hosting'
    footerTextLeftWord3.className = 'footerTextLeftWord'

    const footerTextLeftWord4 = document.createElement('p')
    footerTextLeftWord4.textContent = 'Limited Support'
    footerTextLeftWord4.className = 'footerTextLeftWord'

    const footerTextBtnLeft = document.createElement('button')
    footerTextBtnLeft.className = 'footerTextBtnLeft'
    footerTextBtnLeft.textContent = 'Get Started'


    /////
    const footerTextCenter = document.createElement('div')
    footerTextCenter.className = 'footerTextCenter'
    const footerTextCenterWord1 = document.createElement('p')
    footerTextCenterWord1.textContent = 'Premium'
    footerTextCenterWord1.className = 'footerTextCenterWord'

    const footerTextCenterTitle = document.createElement('p')
    footerTextCenterTitle.className = 'footerTextCenterTitle'
    footerTextCenterTitle.textContent = '$29'
    const footerSpanCenter = document.createElement('span')
    footerSpanCenter.className = 'footerCenterSpan'
    footerSpanCenter.textContent = '/month'

    const footerTextCenterWord2 = document.createElement('p')
    footerTextCenterWord2.textContent = '10 Website'
    footerTextCenterWord2.className = 'footerTextCenterWord'

    const footerTextCenterWord3 = document.createElement('p')
    footerTextCenterWord3.textContent = '15 GB Hosting'
    footerTextCenterWord3.className = 'footerTextCenterWord'

    const footerTextCenterWord4 = document.createElement('p')
    footerTextCenterWord4.textContent = 'Premium Support'
    footerTextCenterWord4.className = 'footerTextCenterWord'

    const footerTextBtnCenter = document.createElement('button')
    footerTextBtnCenter.className = 'footerTextBtnCenter'
    footerTextBtnCenter.textContent = 'Get Started'

    /////
    const footerTextRight = document.createElement('div')
    footerTextRight.className = 'footerTextRight'
    const footerTextRightWord1 = document.createElement('p')
    footerTextRightWord1.className = 'footerTextRightWord'
    footerTextRightWord1.textContent = 'Enterprise'

    const footerTextRightTitle = document.createElement('p')
    footerTextRightTitle.className = 'footerTextRightTitle'
    footerTextRightTitle.textContent = '$49'
    const footerSpan = document.createElement('span')
    footerSpan.className = 'footerSpan'
    footerSpan.textContent = '/month'

    const footerTextRightWord2 = document.createElement('p')
    footerTextRightWord2.textContent = '10 Website'
    footerTextRightWord2.className = 'footerTextRightWord'

    const footerTextRightWord3 = document.createElement('p')
    footerTextRightWord3.textContent = '15 GB Hosting'
    footerTextRightWord3.className = 'footerTextRightWord'

    const footerTextRightWord4 = document.createElement('p')
    footerTextRightWord4.textContent = 'Premium Support'
    footerTextRightWord4.className = 'footerTextRightWord'

    const footerTextBtnRight = document.createElement('button')
    footerTextBtnRight.className = 'footerTextBtnRight'
    footerTextBtnRight.textContent = 'Get Started'

    function toggleButtons(isLeftActive: boolean) {
        if (isLeftActive) {
            footerTextCenterTitle.textContent = '$29';
            footerTextRightTitle.textContent = '$49';
            footerBtnLeft.style.backgroundColor = 'rgb(84, 84, 212)';
            footerBtnLeft.style.color = 'rgb(247, 247, 251)';
            footerBtnRight.style.backgroundColor = 'rgb(247, 247, 251)';
            footerBtnRight.style.color = 'rgb(34, 34, 34)';
        } else {
            footerTextCenterTitle.textContent = '$19';
            footerTextRightTitle.textContent = '$39';
            footerBtnRight.style.backgroundColor = 'rgb(255, 113, 67)';
            footerBtnRight.style.color = 'rgb(247, 247, 251)';
            footerBtnLeft.style.backgroundColor = 'rgb(247, 247, 251)';
            footerBtnLeft.style.color = 'rgb(34, 34, 34)';
        }
    }

    footerBtnLeft.addEventListener('click', () => {
        toggleButtons(true);
    });

    footerBtnRight.addEventListener('click', () => {
        toggleButtons(false);
    });


    footerTextRightTitle.append(footerSpan)
    footerTextRight.append(footerTextRightWord1, footerTextRightTitle, footerTextRightWord2, footerTextRightWord3, footerTextRightWord4, footerTextBtnRight)
    footerTextCenterTitle.append(footerSpanCenter)
    footerTextCenter.append(footerTextCenterWord1, footerTextCenterTitle, footerTextCenterWord2, footerTextCenterWord3, footerTextCenterWord4, footerTextBtnCenter)
    footerTextLeft.append(footerTextLeftWord1, footerTextLeftTitle, footerTextLeftWord2, footerTextLeftWord3, footerTextLeftWord4, footerTextBtnLeft)
    footerBottom.append(footerTextLeft, footerTextCenter, footerTextRight)

    footerBtnWrap.append(footerBtnLeft, footerBtnRight)
    footerTop.append(footerTitle, footerBtnWrap)
    footer.append(footerTop, footerBottom)
    return footer;
}
