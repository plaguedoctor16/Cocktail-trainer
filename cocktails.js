const cocktails = [
{
nom:"Gin & Tonic",
verre:"Highball",
technique:"Build",
glacon:"Cubed",
ingredients:["Gin","Tonic"],
quantites:["4 cl","fill"],
decoration:"Lime wedge"
},

{
nom:"Spirit & Mixer",
verre:"Highball",
technique:"Build",
glacon:"Cubed",
ingredients:["Spirit","Mixer"],
quantites:["4 cl","fill"],
decoration:"Lemon wedge/Lime wedge or None"
},

{
nom:"Cuba Libre",
verre:"Highball",
technique:"Build",
glacon:"Cubed",
ingredients:["Rhum","Fresh Lime juice","Coca-Cola"],
quantites:["4 cl","1 cl","fill"],
decoration:"Lime wedge"
},

{
nom:"Tequila Sunrise",
verre:"Highball",
technique:"Build and sink",
glacon:"Cubed",
ingredients:["Tequila","Orange juice","Grenadine (sink)"],
quantites:["4 cl","fill","1 cl"],
decoration:"None"
},

{
nom:"Rusty Nail",
verre:"Rocks",
technique:"Build",
glacon:"Cubed",
ingredients:["Scotch Whisky","Drambuie"],
quantites:["3 cl","3 cl"],
decoration:"Lemon zest"
},

{
nom:"Godfather",
verre:"Rocks",
technique:"Build",
glacon:"Cubed",
ingredients:["Scotch Whisky","Amaretto"],
quantites:["3 cl","3 cl"],
decoration:"None"
},

{
nom:"Black Russian",
verre:"Rocks",
technique:"Build",
glacon:"Cubed",
ingredients:["Vodka","Coffee liqueur"],
quantites:["4 cl","2 cl"],
decoration:"None"
},

{
nom:"White Russian",
verre:"Rocks",
technique:"Build",
glacon:"Cubed",
ingredients:["Vodka","Coffee liqueur","Milk"],
quantites:["4 cl","2 cl","fill"],
decoration:"None"
},

{
nom:"Moscow Mule",
verre:"Highball / Copper mug",
technique:"Build",
glacon:"Cubed",
ingredients:["Vodka","Fresh Lime juice","Ginger beer"],
quantites:["4 cl","2 cl","fill"],
decoration:"Lime wedge"
},

{
nom:"Woo Woo",
verre:"Highball",
technique:"Build",
glacon:"Cubed",
ingredients:["Vodka","Peach Liqueur","Cranberry juice"],
quantites:["2 cl","2 cl","fill"],
decoration:"Lime wedge"
},

{
nom:"Americano",
verre:"Rocks",
technique:"Build and stir",
glacon:"Cubed",
ingredients:["Sweet Vermouth","Campari","Soda water"],
quantites:["3 cl","3 cl","3 cl"],
decoration:"Orange zest or Orange slice"
},

{
nom:"Screaming Orgasm",
verre:"Rocks",
technique:"Shake and strain",
glacon:"Cubed",
ingredients:["Vodka","Coffee liqueur","Amaretto","Baileys","Milk"],
quantites:["1 cl","1 cl","1 cl","1 cl","4 cl"],
decoration:"None"
},

{
nom:"El Diablo",
verre:"Highball",
technique:"Build",
glacon:"Cubed",
ingredients:["Tequila","Crème de Cassis","Fresh Lime juice","Ginger ale"],
quantites:["3 cl","1 cl","1 cl","fill"],
decoration:"Lime wedge"
},

{
nom:"Sex on the Beach",
verre:"Highball",
technique:"Build",
glacon:"Cubed",
ingredients:["Vodka","Peach Liqueur","Cranberry juice","Orange juice"],
quantites:["2 cl","2 cl","fill equal parts","fill equal parts"],
decoration:"None"
},

{
nom:"Cosmopolitan",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Vodka","Triple Sec","Fresh Lime juice","Cranberry juice"],
quantites:["4 cl","2 cl","1 cl","3 cl"],
decoration:"Orange zest"
},

{
nom:"Daiquiri",
verre:"Highball",
technique:"Shake and Fine strain",
glacon:"None",
ingredients:["Light Rhum","Fresh Lime juice","Sugar syrup"],
quantites:["6 cl","3 cl","1,5 cl"],
decoration:"None"
},

{
nom:"French Martini",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Vodka","Chambord","Pineapple juice"],
quantites:["4 cl","2 cl","4 cl"],
decoration:"1 Raspberry"
},

{
nom:"Lynchburg Lemonade",
verre:"Highball",
technique:"Shake and strain",
glacon:"Cubed",
ingredients:["Jack Daniel's","Triple Sec","Fresh Lemon juice","Sugar syrup","Lemonade"],
quantites:["4 cl","2 cl","2 cl","1 cl","fill"],
decoration:"Lemon wedge"
},

{
nom:"Horse Neck",
verre:"Highball",
technique:"Build",
glacon:"Cubed",
ingredients:["Aromatic Bitters","Bourbon","Ginger Ale"],
quantites:["2 dashes","4 cl","fill"],
decoration:"Lemon spiral"
},

{
nom:"Tom Collins",
verre:"Highball",
technique:"Shake and strain",
glacon:"Cubed",
ingredients:["Gin","Fresh Lemon juice","Sugar Syrup","Soda water"],
quantites:["6 cl","3 cl","1,5 cl","fill"],
decoration:"Lemon wedge"
},

{
nom:"Long Island Iced Tea",
verre:"Highball",
technique:"Shake and strain",
glacon:"Cubed",
ingredients:["Vodka","Light Rhum","Gin","Tequila","Triple Sec","Fresh Lemon juice","Sugar syrup","Coca-Cola"],
quantites:["2 cl","2 cl","2 cl","2 cl","2 cl","2 cl","1 cl","fill"],
decoration:"Lemon wedge"
},

{
nom:"Dry Martini",
verre:"Chilled Martini / Coupe",
technique:"Shake and Julep strain",
glacon:"None",
ingredients:["Dry Vermouth","Gin or Vodka"],
quantites:["1 Barspoon","6 cl"],
decoration:"Olives or Lemon zest"
},

{
nom:"Manhattan Sweet",
verre:"Chilled Martini / Coupe",
technique:"Stir and Julep strain",
glacon:"None",
ingredients:["Aromatic Bitters","Sweet Vermouth","Bourbon"],
quantites:["2 dashes","2 cl","6 cl"],
decoration:"1 Cherry"
},

{
nom:"Rob Roy",
verre:"Chilled Martini / Coupe",
technique:"Stir and Julep strain",
glacon:"None",
ingredients:["Aromatic Bitters","Sweet Vermouth","Scotch Whisky"],
quantites:["2 dashes","2 cl","6 cl"],
decoration:"1 Cherry"
},

{
nom:"Paloma",
verre:"Highball",
technique:"Shake and strain",
glacon:"Cubed",
ingredients:["Tequila","Pink Grapefruit juice","Fresh Lime juice","Sugar syrup","Soda water"],
quantites:["6 cl","6 cl","1 cl","1 cl","fill"],
decoration:"Salt rim and Grapefruit Slice"
},

{
nom:"Margarita",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Tequila","Triple Sec","Fresh Lime juice","Sugar syrup"],
quantites:["4 cl","2 cl","3 cl","1 cl"],
decoration:"Salt rim"
},

{
nom:"Side Car",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Cognac","Triple Sec","Fresh Lemon juice","Sugar syrup"],
quantites:["4 cl","2 cl","3 cl","1 cl"],
decoration:"Sugar rim"
},

{
nom:"Amaretto Sour",
verre:"Rocks",
technique:"Dry Shake, Shake and strain",
glacon:"Cubed",
ingredients:["Aromatic Bitters","Foamer","Amaretto","Fresh Lemon juice","Sugar syrup"],
quantites:["2 dashes","5 dashes","6 cl","3 cl","1 cl"],
decoration:"Lemon Wedge and Cherry"
},

{
nom:"Whiskey Sour",
verre:"Sour Glass/Rocks",
technique:"Dry Shake, Shake and Fine strain / Strain",
glacon:"None / Cubed",
ingredients:["Aromatic Bitters","Foamer","Bourbon","Fresh Lemon juice","Sugar syrup"],
quantites:["2 dashes","5 dashes","6 cl","3 cl","1,5 cl"],
decoration:"Orange Zest and Cherry"
},

{
nom:"Clover Club",
verre:"Chilled Martini / Coupe",
technique:"Dry Shake, Shake and Fine strain",
glacon:"None",
ingredients:["Foamer","Raspberry Syrup","Gin","Fresh Lemon juice"],
quantites:["5 dashes","1,5 cl","6 cl","3 cl"],
decoration:"1 Raspberry"
},

{
nom:"Bramble",
verre:"Rocks",
technique:"Shake, strain and float",
glacon:"Crushed",
ingredients:["Gin","Fresh Lemon juice","Sugar syrup","Crème de Mûre (float)"],
quantites:["4 cl","2 cl","1 cl","2 cl"],
decoration:"Lemon wedge and 2 Blackberries"
},

{
nom:"Mojito",
verre:"Highball",
technique:"Muddle, Bash, Build and Churn",
glacon:"Crushed",
ingredients:["Lime Wedges","Sugar Syrup","Mint Leaves","Light Rhum","Soda"],
quantites:["4 Wedges","2 cl","8-12 Leaves","6 cl","fill"],
decoration:"Mint sprig"
},

{
nom:"Caipirinha",
verre:"Rocks",
technique:"Muddle, Build and Churn",
glacon:"Crushed",
ingredients:["Lime Wedges","Sugar Syrup","Cachaça"],
quantites:["6 Wedges","2 cl","6 cl"],
decoration:"Lime wedge"
},

{
nom:"Mint Julep",
verre:"Rocks / Julep Tin",
technique:"Soak, Muddle, Bash, Build and Churn",
glacon:"Crushed",
ingredients:["Bittered Sugar Cube","Soda water","Mint Leaves","Bourbon"],
quantites:["1 Cube","1 Barspoon","8-12 Leaves","6 cl"],
decoration:"Mint sprig"
},

{
nom:"Gin Basil Smash",
verre:"Rocks",
technique:"Shake and fine strain",
glacon:"Cubed",
ingredients:["Basil Leaves","Gin","Fresh Lemon juice","Sugar Syrup"],
quantites:["8-12 Leaves","6 cl","3 cl","1,5 cl"],
decoration:"Basil leaf"
},

{
nom:"Southside",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Mint Leaves","Gin","Fresh Lime juice","Sugar Syrup"],
quantites:["8-12 Leaves","6 cl","3 cl","1,5 cl"],
decoration:"Single Mint leaf"
},

{
nom:"B52",
verre:"Shot Glass",
technique:"Layer in order",
glacon:"None",
ingredients:["Coffee liqueur","Baileys","Triple Sec"],
quantites:["2 cl","2 cl","2 cl"],
decoration:"None"
},

{
nom:"Pornstar Martini",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Vodka","Passion Fruit Liqueur","Re'al Passion Fruit Puree","Fresh Lime juice","Vanilla Syrup","Brut Champagne"],
quantites:["4 cl","2 cl","2 cl","2 cl","1 cl","shot on the side"],
decoration:"Dehydrated Lime wheel"
},

{
nom:"Bellini",
verre:"Champagne Flute",
technique:"Build",
glacon:"None",
ingredients:["Re'al Peach Puree","Peach Liqueur","Prosecco"],
quantites:["1 cl","1 cl","fill"],
decoration:"None"
},

{
nom:"French 75",
verre:"Champagne Flute",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Gin","Fresh Lemon juice","Sugar Syrup","Champagne"],
quantites:["4 cl","2 cl","1 cl","fill"],
decoration:"Lemon Zest"
},

{
nom:"Last Word",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Gin","Maraschino","Fresh Lime juice","Green Chartreuse"],
quantites:["2 cl","2 cl","2 cl","2 cl"],
decoration:"Cherry"
},

{
nom:"Naked and Famous",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Mezcal","Aperol","Yellow Chartreuse","Fresh Lime juice"],
quantites:["2 cl","2 cl","2 cl","2 cl"],
decoration:"None"
},

{
nom:"Old Fashioned",
verre:"Rocks",
technique:"Stir and Julep strain",
glacon:"Cubed",
ingredients:["Aromatic Bitters","Bourbon","Sugar Syrup"],
quantites:["2 dashes","6 cl","1 cl"],
decoration:"Orange Zest"
},

{
nom:"Dark and Stormy",
verre:"Highball",
technique:"Build and float",
glacon:"Cubed",
ingredients:["Fresh Lime juice","Ginger Beer","Dark Rhum (float)"],
quantites:["2 cl","fill","4 cl"],
decoration:"Lime wedge"
},
{
nom:"Hemingway Daiquiri",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Light Rhum","Maraschino","Fresh Lime juice","Grapefruit juice"],
quantites:["5 cl","1 cl","2 cl","2 cl"],
decoration:"Cherry"
},

{
nom:"White Lady",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Gin","Triple Sec","Fresh Lemon juice","Sugar Syrup"],
quantites:["4 cl","2 cl","3 cl","1 cl"],
decoration:"Lemon Zest"
},

{
nom:"Bloody Mary",
verre:"Highball",
technique:"Roll",
glacon:"Cubed/None",
ingredients:["Vodka","Fresh Lemon juice","Bloody Mary Pre-Batch","Worcestershire Sauce","Tabasco","Black Pepper","Celery Salt","Tomato Juice"],
quantites:["4 cl","1 cl","12 cl","3 cl","1 cl","2 grams","4 grams","fill"],
decoration:"Celery Stick"
},

{
nom:"Negroni",
verre:"Rocks",
technique:"Stir and Julep strain",
glacon:"Cubed",
ingredients:["Sweet Vermouth","Campari","Gin"],
quantites:["2 cl","2 cl","2 cl"],
decoration:"Orange zest or Orange slice"
},

{
nom:"Continental Sour",
verre:"Rocks",
technique:"Dry Shake, Shake, Strain and Float",
glacon:"Cubed",
ingredients:["Foamer","Bourbon","Fresh Lemon juice","Sugar Syrup","Ruby Port (float)"],
quantites:["5 dashes","6 cl","3 cl","1,5 cl","1 cl"],
decoration:"Orange Zest"
},

{
nom:"Aperol Spritz",
verre:"Rocks / Wine Glass",
technique:"Build in order",
glacon:"Cubed",
ingredients:["Prosecco","Aperol","Soda water"],
quantites:["6 cl","4 cl","2 cl"],
decoration:"Orange slice"
},

{
nom:"Mimosa",
verre:"Champagne Flute",
technique:"Build",
glacon:"None",
ingredients:["Orange Juice","Champagne"],
quantites:["1 part","1 part"],
decoration:"None"
},

{
nom:"Espresso Martini",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Vodka","Coffee Liqueur","Espresso","Sugar Syrup"],
quantites:["4 cl","2 cl","1 shot","1 cl"],
decoration:"3 Coffee Beans"
},

{
nom:"Brandy Alexander",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Brandy","Dark Cacao Liqueur","Milk"],
quantites:["4 cl","2 cl","4 cl"],
decoration:"Grated Nutmeg"
},

{
nom:"Mai Tai",
verre:"Rocks / Tiki Mug",
technique:"Shake, strain and float",
glacon:"Crushed",
ingredients:["Dark Rhum","Triple Sec","Fresh Lime juice","Orgeat Syrup","Overproof Rhum (float)"],
quantites:["4 cl","1 cl","2 cl","1 cl","1 cl"],
decoration:"Mint sprig"
},

{
nom:"Kir Royal",
verre:"Champagne Flute",
technique:"Build",
glacon:"None",
ingredients:["Crème de Cassis","Champagne"],
quantites:["2 cl","fill"],
decoration:"None"
},

{
nom:"Classic Champagne Cocktail",
verre:"Champagne Flute",
technique:"Soak, Build",
glacon:"None",
ingredients:["Bittered Sugar Cube","Cognac","Champagne"],
quantites:["1 Cube","2 cl","fill"],
decoration:"None"
},

{
nom:"Blood & Sand",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Scotch Whisky","Sweet Vermouth","Cherry Brandy","Orange Juice"],
quantites:["2 cl","2 cl","2 cl","2 cl"],
decoration:"Orange Zest"
},

{
nom:"Apple Martini",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Vodka","Apple Liqueur","Fresh Lemon juice","Sugar Syrup"],
quantites:["4 cl","2 cl","3 cl","1 cl"],
decoration:"Lemon Zest"
},

{
nom:"Kamikaze",
verre:"Chilled Martini / Coupe",
technique:"Shake and fine strain",
glacon:"None",
ingredients:["Vodka","Triple Sec","Fresh Lime juice"],
quantites:["2 cl","1 cl","1 cl"],
decoration:"None"
},

{
nom:"Singapore Sling",
verre:"Highball / Sling",
technique:"Shake / strain",
glacon:"Cubed",
ingredients:["Aromatic Bitters","Grenadine","Benedictine","Triple Sec","Cherry Brandy","Fresh Lime juice","Gin","Pineapple juice"],
quantites:["1 dash","1 dash","0,5 cl","0,5 cl","1 cl","1 cl","2 cl","8 cl"],
decoration:"Pineapple wedge and Cherry"
},

{
nom:"Gimlet",
verre:"Chilled Martini / Coupe",
technique:"Stir and Julep strain",
glacon:"None",
ingredients:["Gin","Lime Cordial"],
quantites:["6 cl","1 cl"],
decoration:"Lime zest"
},

{
nom:"Martinez",
verre:"Chilled Martini / Coupe",
technique:"Stir and Julep strain",
glacon:"None",
ingredients:["Orange Bitters","Maraschino","Sweet Vermouth","Gin"],
quantites:["2 dashes","1 Barspoon","2 cl","6 cl"],
decoration:"Lemon Zest"
},

{
nom:"Sazerac",
verre:"Rocks",
technique:"Rinse, Stir and Julep strain",
glacon:"None",
ingredients:["Absinthe","Peychaud's Bitters","Cognac or Rye","Sugar syrup"],
quantites:["Rinse","3 dashes","6 cl","1 cl"],
decoration:"Lemon Zest"
},

{
nom:"Zombie",
verre:"Highball / Tiki Mug",
technique:"Shake and Strain",
glacon:"Crushed",
ingredients:["Aromatic Bitters","Absinthe","Overproof Rum","Dark Rum","Light Rum","Grenadine","Cinnamon Syrup","Fresh Lime Juice","Grapefruit Juice"],
quantites:["4 dashes","2 dashes","1 cl","2 cl","2 cl","1 cl","2 cl","2 cl","2 cl"],
decoration:"Mint Sprig"
},

{
nom:"Pina Colada",
verre:"Highball / Hurricane",
technique:"Shake and Strain",
glacon:"Cubed",
ingredients:["Light Rum","Coconut Liqueur","Fresh Lime Juice","Pineapple Juice","Coco Re'al Coconut Cream"],
quantites:["4 cl","2 cl","1 cl","6 cl","4 cl"],
decoration:"Pineapple Wedge and Cherry"
},

{
nom:"Lemon Drop",
verre:"Shooter",
technique:"Shake and Fine strain",
glacon:"None",
ingredients:["Vodka","Fresh Lemon Juice","Sugar Syrup"],
quantites:["2 cl","1 cl","1 cl"],
decoration:"Sugar Coated Lemon Wedge"
},

];

console.log(cocktails);
