import contentImg from '../../assets/img/contentSection.png'

export function createContentSection() {
    const contentSection = document.createElement('section')
    contentSection.className = 'contentSection'

    const contentLeft = document.createElement('div')
    contentLeft.className = 'contentLeft'
    const contentLeftImg = document.createElement('img')
    contentLeftImg.className = 'contentLeftImg'
    contentLeftImg.src = contentImg
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

    contentLeft.append(contentLeftImg)
    contentRight.append(contentTitle, contentText, contentLink)
    contentSection.append(contentLeft, contentRight)

    return contentSection
}