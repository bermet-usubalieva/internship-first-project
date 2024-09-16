import svg1I from '../../assets/img/svg1.svg'
import svg2I from '../../assets/img/svg2.svg'
import svg3I from '../../assets/img/svg3.svg'
import svg4I from '../../assets/img/svg4.svg'
import svg5I from '../../assets/img/svg5.svg'

export function createLogoSection() {

    const svgSection = document.createElement('section')
    svgSection.className = 'svgSection'
    const svg1 = document.createElement('div')
    svg1.className = 'svg'
    const svg1Img = document.createElement('img')
    svg1Img.src = svg1I

    const svg2 = document.createElement('div')
    svg2.className = 'svg'
    const svg2Img = document.createElement('img')
    svg2Img.src = svg2I

    const svg3 = document.createElement('div')
    svg3.className = 'svg'
    const svg3Img = document.createElement('img')
    svg3Img.src = svg3I

    const svg4 = document.createElement('div')
    svg4.className = 'svg'
    const svg4Img = document.createElement('img')
    svg4Img.src = svg4I

    const svg5 = document.createElement('div')
    svg5.className = 'svg'
    const svg5Img = document.createElement('img')
    svg5Img.src = svg5I


    svg5.append(svg5Img)
    svg4.append(svg4Img)
    svg3.append(svg3Img)
    svg2.append(svg2Img)
    svg1.append(svg1Img)
    svgSection.append(svg1, svg2, svg3, svg4, svg5)

    return svgSection;
}
