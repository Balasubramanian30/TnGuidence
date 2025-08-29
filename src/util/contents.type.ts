export interface HeroSection {
    welcome: string
    tamilnadu: string
    tagline: string
    description: string
    cta_button: string
    scroll_down: string
}

export interface StatisticsSection {
    gdp: string
    export: string
    airports: string
    ports: string
}

export interface InnovationSection {
    invest: string
    innovate: string
    create: string
    overview: string
    highlights: string[]
    cta_button_1: string
    cta_button_2: string
    in_tamil_nadu: {
        in: string
        location: string
    }
}

export type ShapeCard =
    | { title: string; text: string }
    | { title: string; text_parts: string[] }
    | { text: string; title_below: string }

export interface ShapeSection {
    title: string
    description: string
    cards: ShapeCard[]
}

export interface Speaker {
    name: string
    email: string
    image: string
}

export interface SectorStats {
    left: string
    leftLabel: string
    right: string
    rightLabel: string
}

export interface Sector {
    title: string
    stats: SectorStats
    description: string
    speaker: Speaker
    sector_image: string
    sector_btn: string
    sector_link: string
}

export interface SectorsSection {
    title: string
    sectors: Sector[]
}

export interface FooterSection {
    heading: string
    links: string[]
}

export interface Footer {
    sections: FooterSection[]
    bottomLinks: string[]
    visitorCount: string
    copyright: string
    subscribePlaceholder: string
    subscribe: string
}

export interface LocaleContent {
    hero_section: HeroSection
    statistics_section: StatisticsSection
    innovation_section: InnovationSection
    shape_section: ShapeSection
    sectors_section: SectorsSection
    footer: Footer
}
