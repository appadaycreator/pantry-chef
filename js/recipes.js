const recipesData = {
  ingredients: [
    '卵',
    '牛乳',
    '鶏肉',
    '玉ねぎ',
    'トマト',
    '豚肉',
    'キャベツ',
    'じゃがいも',
    'にんじん',
    'ピーマン',
    '豆腐',
    '鮭',
    'レタス',
    'ほうれん草',
    'ブロッコリー',
    '白菜'
  ],
  recipes: [
    {
      id: 1,
      name: 'チキントマト煮',
      ingredients: ['鶏肉', 'トマト', '玉ねぎ'],
      cookingTime: 30
    },
    {
      id: 2,
      name: 'オムレツ',
      ingredients: ['卵', '牛乳', '玉ねぎ'],
      cookingTime: 15
    },
    {
      id: 3,
      name: 'トマトスープ',
      ingredients: ['トマト', '玉ねぎ'],
      cookingTime: 20
    },
    {
      id: 4,
      name: '豚肉とキャベツのみそ炒め',
      ingredients: ['豚肉', 'キャベツ', 'にんじん', 'ピーマン'],
      cookingTime: 15
    },
    {
      id: 5,
      name: '鮭のバターソテー',
      ingredients: ['鮭', 'バター', '塩'],
      cookingTime: 12
    },
    {
      id: 6,
      name: '豆腐ハンバーグ',
      ingredients: ['豆腐', '鶏肉', '玉ねぎ'],
      cookingTime: 25
    },
    {
      id: 7,
      name: 'レタスサラダ',
      ingredients: ['レタス', 'トマト'],
      cookingTime: 5
    },
    {
      id: 8,
      name: 'カレー炒飯',
      ingredients: ['ご飯', '鶏肉', '玉ねぎ', 'カレー粉'],
      cookingTime: 10
    },
    {
      id: 9,
      name: 'ほうれん草ソテー',
      ingredients: ['ほうれん草', 'ベーコン', 'バター'],
      cookingTime: 7
    },
    {
      id: 10,
      name: 'キャベツと鶏肉炒め',
      ingredients: ['キャベツ', '鶏肉', 'にんにく'],
      cookingTime: 8
    },
    {
      id: 11,
      name: 'ブロッコリー卵サラダ',
      ingredients: ['ブロッコリー', '卵', 'マヨネーズ'],
      cookingTime: 6
    },
    {
      id: 12,
      name: '豚肉と白菜煮',
      ingredients: ['豚肉', '白菜', '醤油'],
      cookingTime: 15
    },
    {
      id: 13,
      name: 'きのこパスタ',
      ingredients: ['パスタ', 'きのこ類', 'にんにく'],
      cookingTime: 13
    },
    {
      id: 14,
      name: '豆腐ステーキ',
      ingredients: ['豆腐', '醤油', 'みりん'],
      cookingTime: 8
    },
    {
      id: 15,
      name: 'じゃがいもガレット',
      ingredients: ['じゃがいも', 'チーズ'],
      cookingTime: 12
    },
    {
      id: 16,
      name: 'ツナマヨおにぎり',
      ingredients: ['ご飯', 'ツナ缶', 'マヨネーズ'],
      cookingTime: 5
    },
    {
      id: 17,
      name: '簡単親子丼',
      ingredients: ['鶏肉', '卵', '玉ねぎ', 'ご飯'],
      cookingTime: 15
    },
    {
      id: 18,
      name: '鮭チャーハン',
      ingredients: ['ご飯', '鮭', '卵'],
      cookingTime: 10
    },
    {
      id: 19,
      name: '野菜スープ',
      ingredients: ['にんじん', '玉ねぎ', 'じゃがいも'],
      cookingTime: 20
    },
    {
      id: 20,
      name: '豚汁',
      ingredients: ['豚肉', 'じゃがいも', 'にんじん', '玉ねぎ', '味噌'],
      cookingTime: 25
    },
    {
      id: 21,
      name: '鶏の照り焼き',
      ingredients: ['鶏肉', '醤油', 'みりん', '砂糖'],
      cookingTime: 15
    },
    {
      id: 22,
      name: '豚のしょうが焼き',
      ingredients: ['豚肉', '生姜', '醤油', 'みりん'],
      cookingTime: 10
    },
    {
      id: 23,
      name: '白菜ミルフィーユ鍋',
      ingredients: ['白菜', '豚肉', '醤油', '酒'],
      cookingTime: 20
    },
    {
      id: 24,
      name: 'ブロッコリーと鶏肉炒め',
      ingredients: ['ブロッコリー', '鶏肉', 'にんにく', '塩'],
      cookingTime: 10
    },
    {
      id: 25,
      name: '鮭マヨ焼き',
      ingredients: ['鮭', 'マヨネーズ', '塩', 'こしょう'],
      cookingTime: 12
    },
    {
      id: 26,
      name: '豆腐の味噌汁',
      ingredients: ['豆腐', '玉ねぎ', '味噌'],
      cookingTime: 8
    },
    {
      id: 27,
      name: 'じゃがいもポタージュ',
      ingredients: ['じゃがいも', '玉ねぎ', '牛乳', 'バター'],
      cookingTime: 25
    },
    {
      id: 28,
      name: 'レタスチャーハン',
      ingredients: ['ご飯', 'レタス', '卵', '鶏肉'],
      cookingTime: 8
    },
    {
      id: 29,
      name: 'ほうれん草ナムル',
      ingredients: ['ほうれん草', 'にんにく', 'ごま油', '醤油'],
      cookingTime: 5
    },
    {
      id: 30,
      name: 'キャベツお好み焼き',
      ingredients: ['キャベツ', '卵', '小麦粉', '豚肉'],
      cookingTime: 15
    },
    {
      id: 31,
      name: '牛肉ピーマンオイスター炒め',
      ingredients: ['牛肉', 'ピーマン', 'にんにく', '醤油', 'みりん'],
      cookingTime: 12
    },
    {
      id: 32,
      name: 'ナスのミートソースグラタン',
      ingredients: ['ナス', '牛肉', 'トマト', 'チーズ', '玉ねぎ'],
      cookingTime: 20
    },
    {
      id: 33,
      name: '鶏肉とズッキーニの味噌炒め',
      ingredients: ['鶏肉', 'ズッキーニ', 'みそ', 'にんにく', '油'],
      cookingTime: 10
    },
    {
      id: 34,
      name: 'ブロッコリーとベーコンのクリームパスタ',
      ingredients: ['パスタ', 'ブロッコリー', 'ベーコン', '牛乳', 'チーズ'],
      cookingTime: 15
    },
    {
      id: 35,
      name: '豚肉とほうれん草のしょうが炒め',
      ingredients: ['豚肉', 'ほうれん草', '生姜', '醤油', 'みりん'],
      cookingTime: 8
    },
    {
      id: 36,
      name: '牛肉と玉ねぎの甘辛丼',
      ingredients: ['牛肉', '玉ねぎ', '醤油', 'みりん', 'ご飯'],
      cookingTime: 10
    },
    {
      id: 37,
      name: '鶏肉のレモン焼き',
      ingredients: ['鶏肉', 'レモン', '醤油', 'みりん', '塩'],
      cookingTime: 12
    },
    {
      id: 38,
      name: 'ズッキーニと豚肉のカレー炒め',
      ingredients: ['豚肉', 'ズッキーニ', 'カレー粉', 'にんにく', '油'],
      cookingTime: 10
    },
    {
      id: 39,
      name: '豆腐とレタスの中華スープ',
      ingredients: ['豆腐', 'レタス', '鶏肉', '醤油', '生姜'],
      cookingTime: 7
    },
    {
      id: 40,
      name: 'ナスとひき肉の甘味噌炒め',
      ingredients: ['ナス', '豚肉', 'みそ', 'にんにく', '砂糖'],
      cookingTime: 15
    }
    {
      id: 41,
      name: 'ピーマンと豚肉のスタミナ炒め',
      ingredients: ['豚肉', 'ピーマン', 'にんにく', '醤油', 'みりん'],
      cookingTime: 12
    },
    {
      id: 42,
      name: '鶏肉とブロッコリーのにんにく塩炒め',
      ingredients: ['鶏肉', 'ブロッコリー', 'にんにく', '塩', '油'],
      cookingTime: 10
    },
    {
      id: 43,
      name: 'じゃがいもとベーコンのチーズ焼き',
      ingredients: ['じゃがいも', 'ベーコン', 'チーズ'],
      cookingTime: 15
    },
    {
      id: 44,
      name: 'レタスとツナの和風サラダ',
      ingredients: ['レタス', 'ツナ缶', '醤油', 'ごま油'],
      cookingTime: 5
    },
    {
      id: 45,
      name: 'キャベツと挽き肉のカレー煮',
      ingredients: ['キャベツ', '豚ひき肉', 'カレー粉', 'トマト'],
      cookingTime: 20
    },
    {
      id: 46,
      name: '鮭のホイル焼き',
      ingredients: ['鮭', '玉ねぎ', 'バター', '塩'],
      cookingTime: 18
    },
    {
      id: 47,
      name: '豚肉とナスの甘辛炒め',
      ingredients: ['豚肉', 'ナス', '醤油', 'みりん', '砂糖'],
      cookingTime: 10
    },
    {
      id: 48,
      name: 'ほうれん草と豆腐のおひたし',
      ingredients: ['ほうれん草', '豆腐', '醤油'],
      cookingTime: 7
    },
    {
      id: 49,
      name: 'ブロッコリーと鶏肉のクリーム煮',
      ingredients: ['ブロッコリー', '鶏肉', '牛乳', 'バター'],
      cookingTime: 15
    },
    {
      id: 50,
      name: 'ピーマン肉詰め',
      ingredients: ['ピーマン', '豚ひき肉', '玉ねぎ', 'パン粉'],
      cookingTime: 14
    },
    {
      id: 51,
      name: '豆腐キムチチゲ',
      ingredients: ['豆腐', 'キムチ', '豚肉', 'だし'],
      cookingTime: 20
    },
    {
      id: 52,
      name: '鶏むね肉の梅しそ焼き',
      ingredients: ['鶏むね肉', '梅干し', 'しそ', '醤油'],
      cookingTime: 12
    },
    {
      id: 53,
      name: '牛肉とごぼうのしぐれ煮',
      ingredients: ['牛肉', 'ごぼう', '醤油', 'みりん', '砂糖'],
      cookingTime: 25
    },
    {
      id: 54,
      name: 'ナスとトマトのさっぱりマリネ',
      ingredients: ['ナス', 'トマト', '酢', 'オリーブオイル'],
      cookingTime: 10
    },
    {
      id: 55,
      name: 'キャベツと鮭の味噌バター炒め',
      ingredients: ['キャベツ', '鮭', '味噌', 'バター'],
      cookingTime: 12
    },
    {
      id: 56,
      name: 'じゃがいもと豚肉の煮物',
      ingredients: ['じゃがいも', '豚肉', '醤油', 'みりん'],
      cookingTime: 20
    },
    {
      id: 57,
      name: '鶏肉とキャベツの黒酢炒め',
      ingredients: ['鶏肉', 'キャベツ', '黒酢', '醤油'],
      cookingTime: 15
    },
    {
      id: 58,
      name: 'レタスと卵の中華炒め',
      ingredients: ['レタス', '卵', '鶏がらスープ', 'ごま油'],
      cookingTime: 5
    },
    {
      id: 59,
      name: '豚肉の生姜みそ炒め',
      ingredients: ['豚肉', '生姜', '味噌', 'みりん'],
      cookingTime: 10
    },
    {
      id: 60,
      name: 'ブロッコリーとえびのガーリック炒め',
      ingredients: ['ブロッコリー', 'えび', 'にんにく', '塩'],
      cookingTime: 10
    }
  ]
};
