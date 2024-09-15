// Header
// const wrapper = document.createElement('div')
// wrapper.className = 'wrapper'
const container = document.createElement('div')
container.className = 'container'
const header = document.createElement('header')
header.className = 'header'
// header.classList.add('open')
const logoLink = document.createElement('a')
logoLink.className = 'logoLink'
logoLink.href = 'index.html'
const logoImg = document.createElement('img')
logoImg.className = 'logoImg'
logoImg.src = '../assets/img/logo.png'
const logoText = document.createElement('p')
logoText.className = 'logoText'
logoText.textContent = 'logoipsum'

// Nav
const nav = document.createElement('nav')
nav.className = ('nav')
const navUl = document.createElement('ul')
navUl.className = 'navUl'
const items = [
    'Home',
    'Features',
    'Pricing',
    'Blog'
];

items.forEach(text => {
    const menuLi = document.createElement('li');
    menuLi.classList.add('menuLi');
    const menuItem = document.createElement('a');
    menuItem.classList.add('menuItem');
    menuItem.href = '';
    menuItem.textContent = text;

    menuLi.appendChild(menuItem);
    navUl.appendChild(menuLi);
})

const headerButton = document.createElement('button')
headerButton.className = 'headerButton'
headerButton.textContent = 'Get Started'

const btn = document.createElement('button')
btn.className = 'headerBurger'
const headerSpan1 = document.createElement('span')
headerSpan1.className = 'headerSpan1'
const headerSpan2 = document.createElement('span')
headerSpan2.className = 'headerSpan2'
const headerSpan3 = document.createElement('span')
headerSpan3.className = 'headerSpan3'

btn.addEventListener('click', () => {
    header.classList.toggle('open')
})

document.addEventListener('click', (e) => {
    const isClickInsideMenu = header.contains(e.target) || btn.contains(e.target);
    if (!isClickInsideMenu) {
        header.classList.remove('open');
    }
});

// Main
const main = document.createElement('main')
main.className = 'main'
const bannerSection = document.createElement('section')
bannerSection.className = 'bannerSection'
const bannerLeft = document.createElement('div')
bannerLeft.className = 'bannerLeft'
const h1 = document.createElement('h1')
h1.className = 'mainTitle'
h1.textContent = 'Grow your subscription business'
const bannerText = document.createElement('p')
bannerText.className = 'bannerText'
bannerText.textContent = 'Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.'
const bannerButtonWrap = document.createElement('div')
bannerButtonWrap.className = 'bannerButtonWrap'
const bannerButton = document.createElement('button')
bannerButton.className = 'bannerButton'
bannerButton.textContent = 'Get Started'
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

// logo section
const svgSection = document.createElement('section')
svgSection.className = 'svgSection'
const svg1 = document.createElement('div')
svg1.className = 'svg'
const svg1Img = document.createElement('img')
svg1Img.src = '../assets/img/svg1.svg'

const svg2 = document.createElement('div')
svg2.className = 'svg'
const svg2Img = document.createElement('img')
svg2Img.src = '../assets/img/svg2.svg'

const svg3 = document.createElement('div')
svg3.className = 'svg'
const svg3Img = document.createElement('img')
svg3Img.src = '../assets/img/svg3.svg'

const svg4 = document.createElement('div')
svg4.className = 'svg'
const svg4Img = document.createElement('img')
svg4Img.src = '../assets/img/svg4.svg'

const svg5 = document.createElement('div')
svg5.className = 'svg'
const svg5Img = document.createElement('img')
svg5Img.src = '../assets/img/svg5.svg'

// content section
const contentSection = document.createElement('section')
contentSection.className = 'contentSection'
const contentLeft = document.createElement('div')
contentLeft.className = 'contentLeft'
const contentLeftImg = document.createElement('img')
contentLeftImg.className = 'contentLeftImg'
contentLeftImg.src = '../assets/img/contentSection.png'
const contentRight = document.createElement('div')
contentRight.className = 'contentRight'
const contentTitle = document.createElement('h2')
contentTitle.className = 'contentTitle'
contentTitle.textContent = 'Subscription index'
const contentText = document.createElement('p')
contentText.className = 'contentText'
contentText.textContent = "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."
const contentLink = document.createElement('a')
contentLink.className = 'contentLink'
contentLink.textContent = 'Learn more'
contentLink.href = '#'

// metrics section
const metricsSection = document.createElement('section')
metricsSection.className = 'metricsSection'
const metricsLeft = document.createElement('div')
metricsLeft.className = 'metricsLeft'
const metricsLeftImg = document.createElement('img')
metricsLeftImg.className = 'metricsLeftImg'
metricsLeftImg.src = '../assets/img/metricsSection.png'
const metricsRight = document.createElement('div')
metricsRight.className = 'metricsRight'
const metricsTitle = document.createElement('h2')
metricsTitle.className = 'contentTitle'
metricsTitle.textContent = 'Subscription index'
const metricsText = document.createElement('p')
metricsText.className = 'contentText'
metricsText.textContent = "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."
const metricsLink = document.createElement('a')
metricsLink.className = 'contentLink'
metricsLink.textContent = 'Learn more'
metricsLink.href = '#'

// benchmarks section
const benchmarksSection = document.createElement('section')
benchmarksSection.className = 'benchmarksSection'
const benchmarkssvg1 = document.createElement('div')
benchmarkssvg1.className = 'benchmarkssvg'
const benchmarkssvg1Img = document.createElement('img')
benchmarkssvg1Img.src = '../assets/img/Card.png'
const benchmarksTitle1 = document.createElement('p')
benchmarksTitle1.className = 'benchmarksTitle'
benchmarksTitle1.textContent = 'Benchmarks'

const benchmarksText1 = document.createElement('p')
benchmarksText1.className = 'benchmarksText'
benchmarksText1.textContent = 'See how you stack up against comparable companies in similar stages.'
const benchmarkssvg2 = document.createElement('div')
benchmarkssvg2.className = 'benchmarkssvg'
const benchmarkssvg2Img = document.createElement('img')
benchmarkssvg2Img.src = '../assets/img/Calculator.png'
const benchmarksTitle2 = document.createElement('p')
benchmarksTitle2.className = 'benchmarksTitle'
benchmarksTitle2.textContent = 'Pricing Audit'

const benchmarksText2 = document.createElement('p')
benchmarksText2.className = 'benchmarksText'
benchmarksText2.textContent = 'Benchmark the health of your monetization and pricing strategy.'
const benchmarkssvg3 = document.createElement('div')
benchmarkssvg3.className = 'benchmarkssvg'
const benchmarkssvg3Img = document.createElement('img')
benchmarkssvg3Img.src = '../assets/img/Camera.png'
const benchmarksTitle3 = document.createElement('p')
benchmarksTitle3.className = 'benchmarksTitle'
benchmarksTitle3.textContent = 'Retention Audit'

const benchmarksText3 = document.createElement('p')
benchmarksText3.className = 'benchmarksText'
benchmarksText3.textContent = 'Audit where revenue leakage exists and where you can increase retention.'


// footer
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
footerTextRightTitle.className = 'footerTextLeftTitle'
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




footerTextRightTitle.append(footerSpan)
footerTextRight.append(footerTextRightWord1, footerTextRightTitle, footerTextRightWord2, footerTextRightWord3, footerTextRightWord4, footerTextBtnRight)
footerTextCenterTitle.append(footerSpanCenter)
footerTextCenter.append(footerTextCenterWord1, footerTextCenterTitle, footerTextCenterWord2, footerTextCenterWord3, footerTextCenterWord4, footerTextBtnCenter)
footerTextLeft.append(footerTextLeftWord1, footerTextLeftTitle, footerTextLeftWord2, footerTextLeftWord3, footerTextLeftWord4, footerTextBtnLeft)
footerBottom.append(footerTextLeft, footerTextCenter, footerTextRight)

footerBtnWrap.append(footerBtnLeft, footerBtnRight)
footerTop.append(footerTitle, footerBtnWrap)
footer.append(footerTop, footerBottom)
//main
benchmarkssvg3.append(benchmarkssvg3Img, benchmarksTitle3, benchmarksText3)
benchmarkssvg2.append(benchmarkssvg2Img, benchmarksTitle2, benchmarksText2)
benchmarkssvg1.append(benchmarkssvg1Img, benchmarksTitle1, benchmarksText1)
benchmarksSection.append(benchmarkssvg1, benchmarkssvg2, benchmarkssvg3)

metricsLeft.append(metricsLeftImg)
metricsRight.append(metricsTitle, metricsText, metricsLink)
metricsSection.append(metricsRight, metricsLeft)

contentLeft.append(contentLeftImg)
contentRight.append(contentTitle, contentText, contentLink)
contentSection.append(contentLeft, contentRight)

svg5.append(svg5Img)
svg4.append(svg4Img)
svg3.append(svg3Img)
svg2.append(svg2Img)
svg1.append(svg1Img)
svgSection.append(svg1, svg2, svg3, svg4, svg5)
bannerRight.append(bannerRightImg)
bannerArrowWrap.append(bannerArrow)
bannerButtonWrap.append(bannerButton, bannerArrowWrap)
bannerLeft.append(h1, bannerText, bannerButtonWrap)
bannerSection.append(bannerLeft, bannerRight)
main.append(bannerSection, svgSection, contentSection, metricsSection, benchmarksSection)
//header
btn.append(headerSpan1, headerSpan2, headerSpan3)
nav.append(navUl)
logoLink.append(logoImg, logoText)
header.append(logoLink, nav, headerButton, btn)
container.append(header, main, footer)
document.body.append(container)
