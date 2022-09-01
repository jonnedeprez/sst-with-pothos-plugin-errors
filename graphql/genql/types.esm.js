export default {
    "scalars": [
        1,
        2,
        6,
        9
    ],
    "types": {
        "Article": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "BaseError": {
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Error": {
            "message": [
                2
            ],
            "on_BaseError": [
                3
            ],
            "on_LengthError": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "LengthError": {
            "message": [
                2
            ],
            "minLength": [
                6
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "Mutation": {
            "createArticle": [
                0,
                {
                    "title": [
                        2,
                        "String!"
                    ],
                    "url": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "getArticle": [
                0,
                {
                    "id": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}