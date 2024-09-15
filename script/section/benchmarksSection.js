export function createBenchmarksSection() {

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

    benchmarkssvg3.append(benchmarkssvg3Img, benchmarksTitle3, benchmarksText3)
    benchmarkssvg2.append(benchmarkssvg2Img, benchmarksTitle2, benchmarksText2)
    benchmarkssvg1.append(benchmarkssvg1Img, benchmarksTitle1, benchmarksText1)
    benchmarksSection.append(benchmarkssvg1, benchmarkssvg2, benchmarkssvg3)


    return benchmarksSection
}