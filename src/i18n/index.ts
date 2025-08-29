/* eslint-disable @typescript-eslint/no-explicit-any */
import en from './en.json'
import ta from './ta.json'
import fr from './fr.json'
import ko from './ko.json'
import nl from './nl.json'
import ja from './ja.json'
import de from './de.json'
import es from './es.json'
import zh from './zh.json'

const languages: Record<string, any> = {
    EN: en,
    TA: ta ,
    FR: fr,
    KO: ko,
    NL: nl,
    JA: ja,
    DE: de,
    ES: es,
    ZH: zh,
}

export const getLanguageContent = (code: string) => languages[code] ?? languages['EN']
