import { Router } from "express"

export const news_router = Router()

/**
 * -BuscarNoticias
 * |--News--> allNews (limit) ✓
 * |--News--> about/:kind (limit) ✓
 * |--News--> filteredOfInterest (limit) ✓
 * |--News--> ofCountry (limit) ✓
 */

news_router.use('/allNews', (req, res) => {
    let { limit = undefined } = req.query
    if (limit) {
        return res.send({ limit })
    }
    return res.send({ limit: limit })
})

news_router.use('/about/:kind', (req, res) => {
    let { kind } = req.params
    if (kind) {
        return res.send({ kind })
    }
    return res.send({ kind: kind })
})

news_router.use('/interest', (req, res) => {
    const { interesting = [] } = req.body
    if (interesting.length) {
        return res.send({
            msg: "These are the interested kinds",
            interesting
        })
    }
    return res.send({
        msg: "Not found the interesting,because they aren't anything",
        interesting
    })

})

news_router.use('/ofCountry/:country', (req, res) => {
    const { country = undefined } = req.params

    if (country.trim().length == 2) {
        return res.send({
            msg: "They are the country news",
            news: ["bla", "bla", "bla", "bla", "bla", "bla"],
            country
        })
    }

    return res.send({
        msg: "All fields are required",
        news: undefined,
        country
    })
})