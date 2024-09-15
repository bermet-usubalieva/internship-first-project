export function createMetricsSection() {
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


    metricsLeft.append(metricsLeftImg)
    metricsRight.append(metricsTitle, metricsText, metricsLink)
    metricsSection.append(metricsRight, metricsLeft)

    return metricsSection
}