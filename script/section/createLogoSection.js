export function createLogoSection() {

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


    svg5.append(svg5Img)
    svg4.append(svg4Img)
    svg3.append(svg3Img)
    svg2.append(svg2Img)
    svg1.append(svg1Img)
    svgSection.append(svg1, svg2, svg3, svg4, svg5)

    return svgSection;
}
