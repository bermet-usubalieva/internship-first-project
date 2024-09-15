import { createBannerButton } from "../button/bannerButton.js";

export function createBannerSection() {
    const bannerSection = document.createElement('section');
    bannerSection.className = 'bannerSection';

    const bannerLeft = document.createElement('div');
    bannerLeft.className = 'bannerLeft';
    const h1 = document.createElement('h1');
    h1.className = 'mainTitle';
    h1.textContent = 'Grow your subscription business';

    const bannerText = document.createElement('p');
    bannerText.className = 'bannerText';
    bannerText.textContent = 'Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.';

    const bannerButtonWrap = document.createElement('div')
    bannerButtonWrap.className = 'bannerButtonWrap'
    //button
    const bannerButton = createBannerButton()

    const bannerArrowWrap = document.createElement('div')
    bannerArrowWrap.className = 'bannerArrowWrap'
    const bannerArrow = document.createElement('img')
    bannerArrow.className = 'bannerArrow'
    bannerArrow.src = '../assets/img/arrow-down.svg'

    const bannerRight = document.createElement('div')
    bannerRight.className = 'bannerRight'
    const bannerRightImg = document.createElement('img')
    bannerRightImg.className = 'bannerRightImg'
    bannerRightImg.src = '../assets/img/banner.png'

    bannerRight.append(bannerRightImg)
    bannerArrowWrap.append(bannerArrow)
    bannerButtonWrap.append(bannerButton, bannerArrowWrap)
    bannerLeft.append(h1, bannerText, bannerButtonWrap)
    bannerSection.append(bannerLeft, bannerRight)

    return bannerSection
}






