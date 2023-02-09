var nestedObj = {
    'house': {
        'kitchen': {
            'shelf content': 'plates',
            'oven': 'cake'
        },

        'hall': {
            'sitting area':['sofa', 'tv', 'play station'],
            'dinning area': 'dinning table'
        }
    }
}

var sittingArea = nestedObj.house.hall['sitting area'][2]

console.log(sittingArea)