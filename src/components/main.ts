import { createLogoSection } from "./section/createLogoSection";
import { createBannerSection } from "./section/bannerSection";
import { createContentSection } from "./section/contentSection";
import { createMetricsSection } from "./section/metricsSection";
import { createBenchmarksSection } from "./section/benchmarksSection";

export function createMain() {
    const main = document.createElement('main');
    main.className = 'main';

    const benchmarksSection = createBenchmarksSection()
    const metricsSection = createMetricsSection()
    const contentSection = createContentSection()
    const bannerSection = createBannerSection()
    const logoSection = createLogoSection()
    main.append(bannerSection, logoSection, contentSection, metricsSection, benchmarksSection);



    return main;
}






