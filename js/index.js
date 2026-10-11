var meals = [
  {
    name: "Creamy Tuscan Garlic Chicken",
    description:
      "Tender chicken breasts smothered in a rich garlic, sun-dried tomato, and spinach cream sauce.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "348",
    prepTime: "15",
    cookTime: "20",
    servings: "4",
    difficulty: "Easy",
    category: "Italian / Poultry",
    ingredients: [
      "2 large chicken breasts, halved horizontally",
      "2 tbsp olive oil",
      "2 tbsp unsalted butter",
      "6 cloves garlic, minced",
      "1 cup heavy cream",
      "1/2 cup chicken broth",
      "1 cup fresh baby spinach",
      "1/2 cup sun-dried tomatoes, sliced",
      "1/2 cup grated Parmesan cheese",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Season chicken cutlets with salt and pepper on both sides.",
      "Heat olive oil in a skillet over medium-high heat. Sear chicken 5 minutes per side until golden. Set aside.",
      "In the same skillet, melt butter and sauté minced garlic for 1 minute until fragrant.",
      "Pour in chicken broth and heavy cream, bringing to a gentle simmer.",
      "Stir in Parmesan cheese, sun-dried tomatoes, and spinach until the greens wilt.",
      "Return chicken to the skillet, spoon sauce over, and simmer for 3 minutes before serving.",
    ],
    nutrition: {
      calories: "520 kcal",
      carbs: "9g",
      fiber: "2g",
      protein: "44g",
      fat: "35g",
      sodium: "640mg",
    },
    chefsTips: [
      "Use freshly grated Parmesan from a block so the sauce melts silky smooth without curdling.",
      "Pat chicken dry with paper towels before seasoning to achieve a golden sear.",
    ],
  },
  {
    name: "Pan-Seared Lemon Butter Salmon",
    description:
      "Crispy-skinned salmon fillets bathed in a vibrant garlic, fresh lemon, and dill butter pan sauce.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80",
    rate: "4.8",
    reviewCount: "215",
    prepTime: "10",
    cookTime: "12",
    servings: "2",
    difficulty: "Easy",
    category: "Seafood",
    ingredients: [
      "2 salmon fillets with skin on",
      "1 tbsp olive oil",
      "3 tbsp unsalted butter",
      "4 cloves garlic, minced",
      "Juice and zest of 1 fresh lemon",
      "2 tbsp fresh dill, chopped",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Pat salmon completely dry and season with salt and pepper.",
      "Heat olive oil in a skillet over medium-high heat until shimmering.",
      "Place salmon skin-side down, press gently for 10 seconds, and cook undisturbed for 5-6 minutes.",
      "Flip carefully and cook for another 3-4 minutes.",
      "Lower heat, add butter, minced garlic, lemon juice, and zest. Baste salmon with melted butter for 2 minutes.",
      "Garnish with chopped fresh dill and serve immediately.",
    ],
    nutrition: {
      calories: "460 kcal",
      carbs: "3g",
      fiber: "0g",
      protein: "38g",
      fat: "32g",
      sodium: "410mg",
    },
    chefsTips: [
      "Leave salmon undisturbed while searing skin-side down; it will release cleanly once crisp.",
      "Bring salmon to room temperature 15 minutes before cooking for even doneness.",
    ],
  },
  {
    name: "Classic Italian Margherita Pizza",
    description:
      "Artisan-style pizza with a blistered crust, sweet San Marzano tomato sauce, fresh mozzarella, and basil.",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "520",
    prepTime: "25",
    cookTime: "10",
    servings: "3",
    difficulty: "Medium",
    category: "Italian / Pizza",
    ingredients: [
      "250g artisan pizza dough",
      "1/2 cup canned crushed San Marzano tomatoes",
      "150g fresh mozzarella ball, torn and drained",
      "8 fresh basil leaves",
      "1 tbsp extra virgin olive oil",
      "1/2 tsp sea salt",
    ],
    instructions: [
      "Preheat oven with a pizza stone at highest temperature (500°F / 260°C) for at least 45 minutes.",
      "Stretch dough gently by hand into a 12-inch circle on a lightly floured surface.",
      "Spread tomato sauce in a circular motion, leaving a 1-inch perimeter for the crust.",
      "Evenly scatter fresh mozzarella over the sauce.",
      "Bake on preheated stone for 8-10 minutes until cheese bubbles and crust is blistered.",
      "Remove, scatter fresh basil leaves, and finish with a drizzle of extra virgin olive oil.",
    ],
    nutrition: {
      calories: "680 kcal",
      carbs: "78g",
      fiber: "4g",
      protein: "26g",
      fat: "28g",
      sodium: "920mg",
    },
    chefsTips: [
      "Drain fresh mozzarella slices on paper towels beforehand to prevent a soggy pizza base.",
      "Add fresh basil leaves right after baking so they keep their vibrant aroma without burning.",
    ],
  },
  {
    name: "Spicy Beef & Broccoli Stir-Fry",
    description:
      "Tender flank steak slices and crisp broccoli florets tossed in a glossy, aromatic garlic soy sauce.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
    rate: "4.7",
    reviewCount: "194",
    prepTime: "20",
    cookTime: "10",
    servings: "4",
    difficulty: "Medium",
    category: "Asian / Stir Fry",
    ingredients: [
      "450g flank steak, thinly sliced against grain",
      "3 cups fresh broccoli florets",
      "3 tbsp low-sodium soy sauce",
      "2 tbsp oyster sauce",
      "1 tbsp brown sugar",
      "1 tbsp cornstarch",
      "1 tbsp toasted sesame oil",
      "3 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "1/2 tsp red chili flakes",
      "2 tbsp cooking oil",
    ],
    instructions: [
      "Toss sliced beef with 1 tbsp soy sauce and cornstarch; marinate for 10 minutes.",
      "Whisk together remaining soy sauce, oyster sauce, brown sugar, sesame oil, and chili flakes.",
      "Blanch broccoli in boiling water for 90 seconds, then drain and set aside.",
      "Heat 1 tbsp oil in a wok over high heat. Sear beef for 2 minutes undisturbed, then toss and transfer to a bowl.",
      "Add remaining oil to the wok with garlic and ginger; stir-fry for 30 seconds.",
      "Return beef and broccoli, pour in sauce, and toss for 1-2 minutes until thick and glossy.",
    ],
    nutrition: {
      calories: "390 kcal",
      carbs: "14g",
      fiber: "3g",
      protein: "35g",
      fat: "22g",
      sodium: "810mg",
    },
    chefsTips: [
      "Always slice flank steak against the grain to break muscle fibers for tender bites.",
      "Make sure the wok is smoking hot before adding the beef to sear rather than steam.",
    ],
  },
  {
    name: "Creamy Chicken Tikka Masala",
    description:
      "Marinated spiced chicken pieces simmered in a silky, fragrant tomato, ginger, and cream sauce.",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "630",
    prepTime: "30",
    cookTime: "30",
    servings: "4",
    difficulty: "Medium",
    category: "Indian / Curry",
    ingredients: [
      "600g boneless chicken thighs, cubed",
      "1/2 cup plain Greek yogurt",
      "2 tbsp garam masala",
      "1 tbsp ground cumin",
      "1 tbsp smoked paprika",
      "1 tbsp turmeric",
      "1 large onion, finely diced",
      "5 cloves garlic, minced",
      "1 can (400g) crushed tomatoes",
      "1 cup heavy cream",
      "2 tbsp butter and 1 tbsp oil",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken with yogurt, half the garam masala, cumin, turmeric, and salt for 20 minutes.",
      "Sear chicken in a hot skillet with 1 tbsp oil until lightly charred (6 minutes). Set aside.",
      "Melt butter in a pot and sauté diced onions until golden brown (8 minutes).",
      "Add garlic and remaining spices; cook for 1 minute until fragrant.",
      "Pour in crushed tomatoes and simmer on low for 15 minutes, stirring occasionally.",
      "Stir in heavy cream and cooked chicken. Simmer for 10 minutes until thick. Garnish with fresh cilantro.",
    ],
    nutrition: {
      calories: "590 kcal",
      carbs: "16g",
      fiber: "3g",
      protein: "42g",
      fat: "39g",
      sodium: "720mg",
    },
    chefsTips: [
      "Use boneless chicken thighs rather than breasts so the meat stays tender through simmering.",
      "Serve alongside warm basmati rice and garlic butter naan.",
    ],
  },
  {
    name: "Classic American Smash Cheeseburger",
    description:
      "Crispy-edged seared beef patties with melted American cheese, tangy sauce, and pickles on a brioche bun.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
    rate: "4.8",
    reviewCount: "410",
    prepTime: "15",
    cookTime: "8",
    servings: "2",
    difficulty: "Easy",
    category: "American / Burgers",
    ingredients: [
      "350g ground beef (80/20 blend)",
      "4 slices American cheese",
      "2 brioche burger buns",
      "2 tbsp butter",
      "4 dill pickle slices",
      "2 tbsp mayonnaise",
      "1 tbsp ketchup",
      "1 tsp yellow mustard",
      "Kosher salt and black pepper",
    ],
    instructions: [
      "Whisk mayonnaise, ketchup, mustard, and a dash of pickle brine to make burger sauce.",
      "Divide ground beef into four loose balls (approx. 85g each).",
      "Butter and toast buns on a cast-iron skillet until golden.",
      "Heat skillet to high heat. Place beef balls and smash down flat with a heavy spatula.",
      "Season with salt and pepper. Cook for 2 minutes until edges are crisp and browned.",
      "Flip patties, immediately top each with cheese, stack two patties together, and assemble inside buns.",
    ],
    nutrition: {
      calories: "740 kcal",
      carbs: "34g",
      fiber: "2g",
      protein: "46g",
      fat: "48g",
      sodium: "1050mg",
    },
    chefsTips: [
      "80/20 ground chuck is essential—the fat ensures crispy caramelized edges and juiciness.",
      "Smash the patties only once at the beginning to keep the juices trapped.",
    ],
  },
  {
    name: "Baja-Style Crispy Fish Tacos",
    description:
      "Beer-battered golden fried white fish fillets in warm corn tortillas with tangy slaw and chipotle crema.",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "285",
    prepTime: "20",
    cookTime: "15",
    servings: "3",
    difficulty: "Medium",
    category: "Mexican / Street Food",
    ingredients: [
      "400g white fish fillets, sliced into strips",
      "1 cup all-purpose flour",
      "1 cup cold Mexican lager or club soda",
      "1 tsp garlic powder and smoked paprika",
      "6 small corn tortillas",
      "2 cups shredded cabbage",
      "1/2 cup sour cream",
      "1 tbsp chipotle in adobo",
      "Juice of 2 fresh limes",
      "Oil for frying",
    ],
    instructions: [
      "Mix cabbage, 1 tbsp lime juice, and a pinch of salt to create crunchy slaw.",
      "Whisk sour cream, chipotle pepper, and remaining lime juice to make chipotle crema.",
      "Whisk flour, garlic powder, paprika, salt, and cold beer together into a smooth batter.",
      "Heat oil in a pot to 375°F (190°C).",
      "Dip fish into batter and fry in batches for 3-4 minutes until golden and crisp.",
      "Warm tortillas, fill with fried fish, crunchy slaw, and drizzle with chipotle crema.",
    ],
    nutrition: {
      calories: "480 kcal",
      carbs: "45g",
      fiber: "5g",
      protein: "32g",
      fat: "18g",
      sodium: "590mg",
    },
    chefsTips: [
      "Keep the batter ice-cold; the temperature difference with the hot oil creates an airy, extra-crispy crust.",
      "Warm tortillas on a dry skillet for 30 seconds so they don't tear when folded.",
    ],
  },
  {
    name: "Creamy Wild Mushroom Risotto",
    description:
      "Slow-cooked Arborio rice infused with white wine, earthy sautéed mushrooms, and sharp Parmigiano-Reggiano.",
    image:
      "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1000&q=80",
    rate: "4.7",
    reviewCount: "178",
    prepTime: "15",
    cookTime: "30",
    servings: "4",
    difficulty: "Hard",
    category: "Italian / Vegetarian",
    ingredients: [
      "1.5 cups Arborio rice",
      "300g mixed mushrooms, sliced",
      "4 cups warm vegetable broth",
      "1/2 cup dry white wine",
      "1 shallot, finely minced",
      "3 cloves garlic, minced",
      "3 tbsp unsalted butter",
      "2 tbsp olive oil",
      "1/2 cup grated Parmigiano-Reggiano",
      "2 tbsp fresh thyme",
    ],
    instructions: [
      "Keep broth simmering gently on low heat.",
      "In a Dutch oven, heat 1 tbsp olive oil and sauté mushrooms until browned. Set aside.",
      "Add remaining oil and 1 tbsp butter; sauté shallot and garlic for 2 minutes.",
      "Add Arborio rice and toast for 2 minutes until translucent at edges.",
      "Pour in white wine and stir until completely absorbed.",
      "Add warm broth one ladle at a time, stirring until absorbed before adding the next (approx. 20 minutes).",
      "Fold in cooked mushrooms, remaining butter, and Parmesan cheese. Season and serve.",
    ],
    nutrition: {
      calories: "430 kcal",
      carbs: "62g",
      fiber: "3g",
      protein: "11g",
      fat: "14g",
      sodium: "510mg",
    },
    chefsTips: [
      "Only add hot broth; cold liquid lowers the temperature and interrupts starch extraction.",
      "Never wash Arborio rice; surface starch creates the signature creamy texture.",
    ],
  },
  {
    name: "Greek Chicken Souvlaki with Tzatziki",
    description:
      "Char-grilled skewers of herb-marinated chicken served with warm pita, crisp cucumbers, and garlic tzatziki.",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "389",
    prepTime: "25",
    cookTime: "15",
    servings: "4",
    difficulty: "Easy",
    category: "Mediterranean / Grilled",
    ingredients: [
      "600g boneless chicken breasts, cubed",
      "3 tbsp extra virgin olive oil",
      "Juice of 1 lemon",
      "4 cloves garlic, minced",
      "1 tbsp dried oregano",
      "1 cup Greek yogurt",
      "1/2 cucumber, grated and drained",
      "1 tbsp fresh dill, chopped",
      "4 Greek pita breads",
      "Salt and black pepper",
    ],
    instructions: [
      "Whisk olive oil, lemon juice, half the garlic, oregano, salt, and pepper in a bowl.",
      "Add chicken cubes, coat thoroughly, and marinate for 20 minutes.",
      "Make tzatziki: Squeeze all liquid out of cucumber, then mix with yogurt, garlic, dill, and salt.",
      "Thread marinated chicken onto soaked wooden skewers.",
      "Grill skewers over medium-high heat for 12-14 minutes, turning regularly until charred and cooked through.",
      "Serve inside warm pitas with fresh red onion slices and generous spoonfuls of tzatziki.",
    ],
    nutrition: {
      calories: "510 kcal",
      carbs: "38g",
      fiber: "3g",
      protein: "48g",
      fat: "18g",
      sodium: "670mg",
    },
    chefsTips: [
      "Squeeze every bit of water from the grated cucumber with a paper towel to avoid runny tzatziki.",
      "Soak wooden skewers in water for 30 minutes before grilling to prevent burning.",
    ],
  },
  {
    name: "Fluffy Blueberry Buttermilk Pancakes",
    description:
      "Golden, cloud-like pancakes bursting with blueberries, topped with whipped butter and maple syrup.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "472",
    prepTime: "15",
    cookTime: "15",
    servings: "4",
    difficulty: "Easy",
    category: "Breakfast / Brunch",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp granulated sugar",
      "2 tsp baking powder",
      "1/2 tsp baking soda",
      "1/2 tsp salt",
      "2 cups buttermilk",
      "2 large eggs",
      "1/4 cup melted butter",
      "1.5 cups fresh blueberries",
      "Maple syrup for serving",
    ],
    instructions: [
      "Whisk flour, sugar, baking powder, baking soda, and salt in a bowl.",
      "In a separate bowl, whisk buttermilk, eggs, and melted butter.",
      "Fold wet ingredients into dry ingredients gently until combined (small lumps are fine).",
      "Heat a lightly buttered non-stick griddle over medium-low heat.",
      "Pour 1/3 cup of batter per pancake, then scatter blueberries directly on top.",
      "Cook for 2-3 minutes until bubbles form, flip, and cook 1-2 minutes until golden.",
      "Serve warm stacked with butter and maple syrup.",
    ],
    nutrition: {
      calories: "410 kcal",
      carbs: "62g",
      fiber: "3g",
      protein: "10g",
      fat: "14g",
      sodium: "490mg",
    },
    chefsTips: [
      "Do not overmix the batter; small lumps keep the pancakes tender and airy.",
      "Scatter berries directly onto batter on the griddle rather than mixing into the bowl.",
    ],
  },
  {
    name: "Japanese Teriyaki Chicken Rice Bowl",
    description:
      "Glazed, caramelized chicken thighs served over steamed sushi rice with tender-crisp edamame and sesame seeds.",
    image:
      "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?auto=format&fit=crop&w=1000&q=80",
    rate: "4.8",
    reviewCount: "312",
    prepTime: "15",
    cookTime: "15",
    servings: "2",
    difficulty: "Easy",
    category: "Japanese / Bowls",
    ingredients: [
      "400g chicken thighs, boneless and skinless",
      "3 tbsp Japanese soy sauce",
      "2 tbsp mirin",
      "2 tbsp sake or rice vinegar",
      "1 tbsp brown sugar",
      "1 clove garlic, grated",
      "1 tsp fresh ginger, grated",
      "2 cups cooked sushi rice",
      "1/2 cup shelled edamame",
      "Toasted sesame seeds and scallions",
    ],
    instructions: [
      "Whisk soy sauce, mirin, sake, brown sugar, garlic, and ginger in a small saucepan; simmer for 5 minutes until syrupy.",
      "Season chicken thighs lightly with salt and pepper.",
      "Sear chicken in a skillet over medium-high heat for 5 minutes per side until cooked through.",
      "Pour the reduced teriyaki sauce into the pan and baste chicken for 2 minutes until glossy and coated.",
      "Slice chicken into strips.",
      "Divide warm rice into bowls, arrange sliced chicken and edamame, and garnish with sesame seeds and scallions.",
    ],
    nutrition: {
      calories: "530 kcal",
      carbs: "58g",
      fiber: "3g",
      protein: "41g",
      fat: "14g",
      sodium: "880mg",
    },
    chefsTips: [
      "Cook chicken thighs instead of breasts for the juiciest texture that won't dry out under sticky sauce.",
      "Simmer the sauce until it coats the back of a spoon before pouring over chicken.",
    ],
  },
  {
    name: "Authentic Mexican Beef Birria Tacos",
    description:
      "Slow-braised shredded chuck roast tacos griddled crispy with cheese and served with rich spiced consommé for dipping.",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80",
    rate: "5.0",
    reviewCount: "820",
    prepTime: "30",
    cookTime: "180",
    servings: "6",
    difficulty: "Hard",
    category: "Mexican / Tacos",
    ingredients: [
      "1kg beef chuck roast, cut into large chunks",
      "4 dried guajillo chiles, stemmed and seeded",
      "2 dried ancho chiles, stemmed and seeded",
      "1 medium onion and 5 garlic cloves",
      "1 tbsp Mexican oregano and 1 tsp cumin",
      "1 cinnamon stick",
      "4 cups beef broth",
      "12 small corn tortillas",
      "2 cups Oaxaca or mozzarella cheese, shredded",
      "Diced onion and fresh cilantro",
    ],
    instructions: [
      "Toast dried chiles in a dry pot for 1 minute, then simmer in 2 cups of broth for 10 minutes to soften.",
      "Blend softened chiles with onion, garlic, oregano, cumin, and broth until completely smooth.",
      "Sear seasoned beef chunks in a Dutch oven until browned on all sides.",
      "Pour chile marinade and remaining broth over beef, add cinnamon stick, and simmer on low for 180 minutes until pull-apart tender.",
      "Shred beef and reserve flavorful consommé in bowls.",
      "Dip corn tortillas into consommé fat, place on hot griddle, top with cheese and shredded beef, fold into tacos, and fry until crispy. Serve with consommé for dipping.",
    ],
    nutrition: {
      calories: "620 kcal",
      carbs: "36g",
      fiber: "4g",
      protein: "48g",
      fat: "32g",
      sodium: "890mg",
    },
    chefsTips: [
      "Skim the spiced red fat from the top of the consommé to grease the skillet for frying tortillas.",
      "Dipping tortillas in consommé before frying gives them their famous crunchy reddish exterior.",
    ],
  },
  {
    name: "Creamy Garlic Parmesan Fettuccine with Shrimp",
    description:
      "Plump sautéed jumbo shrimp over ribbons of fettuccine pasta coated in an authentic, velvety garlic Parmesan cream sauce.",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1000&q=80",
    rate: "4.8",
    reviewCount: "340",
    prepTime: "15",
    cookTime: "15",
    servings: "4",
    difficulty: "Medium",
    category: "Italian / Seafood",
    ingredients: [
      "350g fettuccine pasta",
      "400g raw jumbo shrimp, peeled and deveined",
      "3 tbsp unsalted butter",
      "4 cloves garlic, minced",
      "1.5 cups heavy cream",
      "1 cup freshly grated Parmigiano-Reggiano",
      "1/4 tsp ground nutmeg",
      "2 tbsp fresh Italian parsley, chopped",
      "Salt and cracked black pepper",
    ],
    instructions: [
      "Boil fettuccine in salted water until al dente; reserve 1/2 cup pasta cooking water.",
      "Melt 1 tbsp butter in a large skillet over high heat. Sear shrimp for 2 minutes per side until pink. Transfer to a plate.",
      "In the same skillet, melt remaining butter and sauté minced garlic for 1 minute.",
      "Pour in heavy cream and nutmeg; bring to a gentle simmer for 3 minutes.",
      "Remove pan from heat and stir in grated Parmesan cheese until melted and smooth.",
      "Add pasta, shrimp, and a splash of reserved pasta water. Toss for 1 minute until sauce glazes every noodle. Garnish with parsley.",
    ],
    nutrition: {
      calories: "640 kcal",
      carbs: "54g",
      fiber: "2g",
      protein: "36g",
      fat: "34g",
      sodium: "760mg",
    },
    chefsTips: [
      "Take the pan off direct heat before stirring in Parmesan cheese to prevent the dairy fats from separating.",
      "Always save starchy pasta water—it helps bind cream and cheese to the noodles.",
    ],
  },
  {
    name: "Mediterranean Shakshuka with Crumbled Feta",
    description:
      "Poached eggs nestled in a simmered, aromatic tomato, bell pepper, and cumin sauce topped with tangy feta cheese.",
    image:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "310",
    prepTime: "15",
    cookTime: "20",
    servings: "3",
    difficulty: "Easy",
    category: "Mediterranean / Breakfast",
    ingredients: [
      "4 large eggs",
      "1 can (400g) whole peeled plum tomatoes, crushed by hand",
      "1 large red bell pepper, diced",
      "1 medium yellow onion, diced",
      "3 cloves garlic, minced",
      "1 tsp ground cumin",
      "1 tsp smoked paprika",
      "1/2 tsp chili powder",
      "1/3 cup Greek feta cheese, crumbled",
      "2 tbsp olive oil",
      "Fresh parsley and cilantro",
    ],
    instructions: [
      "Heat olive oil in a cast-iron skillet over medium heat. Sauté onion and red bell pepper for 6 minutes until soft.",
      "Add minced garlic, cumin, paprika, and chili powder; cook for 1 minute until aromatic.",
      "Pour in crushed tomatoes and season with salt and pepper. Simmer for 10 minutes until sauce thickens.",
      "Use a spoon to create 4 small wells in the sauce. Crack an egg into each well.",
      "Cover skillet and cook on low heat for 5-8 minutes until egg whites are set but yolks remain runny.",
      "Scatter crumbled feta and fresh herbs over top. Serve immediately with warm crusty sourdough bread.",
    ],
    nutrition: {
      calories: "290 kcal",
      carbs: "18g",
      fiber: "4g",
      protein: "16g",
      fat: "17g",
      sodium: "580mg",
    },
    chefsTips: [
      "Cook on gentle, low heat once eggs are added so the whites cook through without hardening the creamy yolks.",
      "Serve straight from the cast-iron skillet with warm crusty bread for dipping.",
    ],
  },
  {
    name: "Crispy Korean Fried Chicken Wings",
    description:
      "Ultra-crispy double-fried chicken wings glazed in a spicy-sweet gochujang, honey, and sesame glaze.",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "540",
    prepTime: "20",
    cookTime: "25",
    servings: "4",
    difficulty: "Medium",
    category: "Korean / Appetizer",
    ingredients: [
      "900g chicken wings and drumettes",
      "3/4 cup potato starch or cornstarch",
      "1 tbsp fresh ginger, grated",
      "3 tbsp gochujang (Korean chili paste)",
      "2 tbsp honey",
      "2 tbsp brown sugar",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tbsp sesame oil",
      "Vegetable oil for frying",
      "Toasted sesame seeds",
    ],
    instructions: [
      "Season chicken wings with grated ginger, salt, and black pepper. Coat evenly in potato starch.",
      "Simmer gochujang, honey, brown sugar, soy sauce, rice vinegar, and sesame oil in a saucepan for 3 minutes until syrupy.",
      "Heat frying oil to 325°F (165°C). Fry wings for 10 minutes until lightly golden. Drain on a wire rack for 5 minutes.",
      "Increase oil temperature to 375°F (190°C). Fry wings a second time for 4-5 minutes until deeply golden and shatteringly crisp.",
      "Transfer hot wings to a bowl, pour glaze over, and toss thoroughly until coated.",
      "Sprinkle with sesame seeds and chopped scallions; serve hot.",
    ],
    nutrition: {
      calories: "560 kcal",
      carbs: "32g",
      fiber: "1g",
      protein: "34g",
      fat: "32g",
      sodium: "840mg",
    },
    chefsTips: [
      "Double frying is the secret: the first fry cooks the meat; the second fry creates a crispiness that stays crunchy even under sauce.",
      "Potato starch creates a lighter, crunchier shell than regular all-purpose flour.",
    ],
  },
  {
    name: "Classic French Beef Bourguignon",
    description:
      "Tender chunks of beef slow-braised in red Burgundy wine with pearl onions, mushrooms, carrots, and smoked bacon.",
    image:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "410",
    prepTime: "30",
    cookTime: "150",
    servings: "6",
    difficulty: "Hard",
    category: "French / Stew",
    ingredients: [
      "1kg beef chuck, cut into 2-inch chunks",
      "150g smoked bacon lardons",
      "750ml dry red wine (Pinot Noir or Burgundy)",
      "2 cups beef stock",
      "2 tbsp tomato paste",
      "3 carrots, sliced into thick rounds",
      "1 large onion, sliced",
      "200g pearl onions, peeled",
      "250g cremini mushrooms, halved",
      "3 cloves garlic, minced",
      "Fresh thyme sprigs and bay leaves",
    ],
    instructions: [
      "Cook bacon lardons in a heavy Dutch oven until crisp; remove bacon and leave rendered fat.",
      "Pat beef chunks dry. Brown beef in batches over high heat in bacon fat until deeply caramelized; set aside.",
      "Sauté sliced onion and carrots for 5 minutes. Stir in garlic and tomato paste for 1 minute.",
      "Pour in red wine, scraping up all browned bits from bottom of the pot. Add beef stock, herbs, bacon, and beef.",
      "Cover and simmer on low heat for 120 minutes until beef is fork-tender.",
      "In a separate skillet, sauté mushrooms and pearl onions in butter for 6 minutes, then fold into the stew for the final 20 minutes.",
    ],
    nutrition: {
      calories: "580 kcal",
      carbs: "14g",
      fiber: "3g",
      protein: "52g",
      fat: "30g",
      sodium: "720mg",
    },
    chefsTips: [
      "Use a good quality dry red wine you would actually drink—cheap cooking wine creates an overly acidic stew.",
      "Sauté mushrooms separately and fold them in near the end to keep them plump rather than soggy.",
    ],
  },
  {
    name: "Moroccan Chickpea & Vegetable Tagine",
    description:
      "Hearty chickpeas and vegetables simmered with sweet dried apricots, cinnamon, ginger, and saffron broth.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
    rate: "4.7",
    reviewCount: "165",
    prepTime: "20",
    cookTime: "35",
    servings: "4",
    difficulty: "Easy",
    category: "Moroccan / Vegan",
    ingredients: [
      "2 cans (400g each) chickpeas, rinsed and drained",
      "1 butternut squash or sweet potato, cubed",
      "1 zucchini, sliced thick",
      "1 can (400g) diced tomatoes",
      "1 medium onion, diced",
      "3 cloves garlic, minced",
      "1/2 cup dried apricots, halved",
      "2 tsp ground cumin and coriander",
      "1 tsp ground cinnamon and turmeric",
      "2 cups vegetable stock",
      "Toasted flaked almonds and fresh cilantro",
    ],
    instructions: [
      "Heat 2 tbsp olive oil in a wide pot. Sauté onion for 5 minutes until soft.",
      "Add garlic, cumin, coriander, cinnamon, and turmeric; stir for 1 minute until fragrant.",
      "Add sweet potato cubes, chickpeas, diced tomatoes, dried apricots, and vegetable stock.",
      "Bring to a boil, then cover and simmer on low heat for 20 minutes until sweet potatoes are tender.",
      "Add zucchini slices and simmer uncovered for another 10 minutes until sauce thickens.",
      "Serve over fluffy steamed couscous, garnished with toasted almonds and fresh cilantro.",
    ],
    nutrition: {
      calories: "380 kcal",
      carbs: "68g",
      fiber: "12g",
      protein: "14g",
      fat: "7g",
      sodium: "490mg",
    },
    chefsTips: [
      "Dried apricots balance the warm spices with subtle sweetness characteristic of authentic North African cooking.",
      "Toast sliced almonds in a dry pan for 2 minutes before serving for an essential crunchy contrast.",
    ],
  },
  {
    name: "Thai Red Coconut Curry with Chicken",
    description:
      "Vibrant and creamy red coconut curry packed with chicken, bamboo shoots, bell peppers, and fresh Thai basil.",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1000&q=80",
    rate: "4.8",
    reviewCount: "380",
    prepTime: "15",
    cookTime: "20",
    servings: "4",
    difficulty: "Easy",
    category: "Thai / Curry",
    ingredients: [
      "500g chicken breast or thighs, thinly sliced",
      "1 can (400ml) full-fat coconut milk",
      "3 tbsp authentic Thai red curry paste",
      "1 red bell pepper, sliced into strips",
      "1/2 cup canned bamboo shoots, drained",
      "1 tbsp fish sauce",
      "1 tbsp coconut palm sugar or brown sugar",
      "1 cup fresh Thai basil leaves",
      "1 tbsp vegetable oil",
    ],
    instructions: [
      "Heat vegetable oil in a pot over medium heat. Add red curry paste and fry for 2 minutes until fragrant and oil separates.",
      "Pour in half of the coconut milk and stir until the curry paste completely dissolves.",
      "Add sliced chicken and cook for 4-5 minutes until the chicken turns opaque.",
      "Pour in remaining coconut milk, bell pepper strips, and bamboo shoots. Simmer for 8 minutes.",
      "Season with fish sauce and palm sugar, adjusting to your preferred sweet-savory balance.",
      "Turn off the heat, stir in fresh Thai basil leaves until wilted, and serve with jasmine rice.",
    ],
    nutrition: {
      calories: "440 kcal",
      carbs: "12g",
      fiber: "3g",
      protein: "32g",
      fat: "29g",
      sodium: "710mg",
    },
    chefsTips: [
      "Fry the curry paste in oil first before adding liquid to bloom the aromatics and extract full flavor.",
      "Always use full-fat coconut milk; light coconut milk yields a watery curry.",
    ],
  },
  {
    name: "Traditional Spanish Seafood Paella",
    description:
      "Saffron-scented Bomba rice loaded with jumbo shrimp, mussels, calamari, and sweet peas with crispy socarrat.",
    image:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "490",
    prepTime: "25",
    cookTime: "35",
    servings: "6",
    difficulty: "Hard",
    category: "Spanish / Seafood",
    ingredients: [
      "2 cups Spanish Bomba or Calasparra rice",
      "300g jumbo shrimp, shell on",
      "250g fresh mussels, cleaned and debearded",
      "200g calamari rings",
      "4.5 cups warm seafood broth",
      "1/2 tsp Spanish saffron threads",
      "1 medium onion and 4 cloves garlic, minced",
      "1/2 cup grated fresh tomatoes",
      "1 tsp sweet smoked paprika",
      "1/2 cup green peas",
      "Lemon wedges for serving",
    ],
    instructions: [
      "Steep saffron threads in 1/2 cup warm seafood broth for 15 minutes.",
      "Heat olive oil in a 14-inch paella pan. Sear shrimp and calamari for 2 minutes; set aside on a plate.",
      "In the same pan, sauté onion and garlic for 4 minutes. Stir in grated tomatoes and smoked paprika until a paste forms.",
      "Add rice and stir for 2 minutes to coat every grain in the sofrito.",
      "Pour in remaining broth and saffron infusion. Bring to a boil, distribute rice evenly, then DO NOT stir again.",
      "Simmer for 15 minutes. Arrange mussels, shrimp, and peas on top. Cook for another 5 minutes until mussels open and rice forms a crispy bottom crust (socarrat).",
    ],
    nutrition: {
      calories: "510 kcal",
      carbs: "64g",
      fiber: "3g",
      protein: "35g",
      fat: "12g",
      sodium: "840mg",
    },
    chefsTips: [
      "Never stir the rice after liquid is added; leaving it still allows the legendary crispy bottom layer (socarrat) to develop.",
      "Use Bomba rice because it absorbs three times its volume in broth without getting mushy.",
    ],
  },
  {
    name: "Slow-Cooked BBQ Pulled Pork Sandwich",
    description:
      "Melt-in-your-mouth shredded pork shoulder glazed in tangy apple cider BBQ sauce, piled high on toasted brioche with slaw.",
    image:
      "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=1000&q=80",
    rate: "4.9",
    reviewCount: "675",
    prepTime: "20",
    cookTime: "360",
    servings: "8",
    difficulty: "Medium",
    category: "American / BBQ",
    ingredients: [
      "1.8kg boneless pork shoulder / pork butt",
      "2 tbsp brown sugar",
      "1 tbsp smoked paprika and garlic powder",
      "1 tbsp onion powder and chili powder",
      "1 tsp ground black pepper and kosher salt",
      "1 cup apple cider vinegar",
      "1.5 cups smoky barbecue sauce",
      "8 brioche burger buns",
      "2 cups creamy coleslaw for topping",
    ],
    instructions: [
      "Combine brown sugar, paprika, garlic powder, onion powder, chili powder, salt, and pepper to make the dry rub.",
      "Massage dry rub all over pork shoulder.",
      "Place pork in a slow cooker, pour apple cider vinegar around the base, and cook on LOW for 360 minutes until fork-tender.",
      "Transfer pork to a cutting board and shred meat with two forks, discarding excess fat.",
      "Toss shredded pork with barbecue sauce and 1/4 cup of cooking juices.",
      "Toast brioche buns, pile on pulled pork, and top with creamy coleslaw.",
    ],
    nutrition: {
      calories: "580 kcal",
      carbs: "46g",
      fiber: "3g",
      protein: "42g",
      fat: "24g",
      sodium: "980mg",
    },
    chefsTips: [
      "Always cook pork shoulder on LOW in a slow cooker to give connective tissues time to break down into gelatin.",
      "Rest the pork for 15 minutes before shredding so juices reabsorb into the fibers.",
    ],
  },
];

var mealImage = document.getElementById("mealImage");
var mealRating = document.getElementById("mealRating");
var reviewCount = document.getElementById("reviewCount");
var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cookTime");
var servings = document.getElementById("servings");
var difficulty = document.getElementById("difficulty");
var category = document.getElementById("category");
var mealName = document.getElementById("mealName");
var description = document.getElementById("description");
var timeWarning = document.getElementById("timeWarning");
var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructionsList");
var mealCalories = document.getElementById("mealCalories");
var mealProtein = document.getElementById("mealProtein");
var mealCarbs = document.getElementById("mealCarbs");
var mealFat = document.getElementById("mealFat");
var mealFiber = document.getElementById("mealFiber");
var mealSodium = document.getElementById("mealSodium");
var chefsTipsList = document.getElementById("chefsTipsList");
var currentMeal;

window.onload = displayRandomMeal();

function displayRandomMeal() {
  var mealIndex = Math.floor(Math.random() * meals.length);
  if (mealIndex === currentMeal) {
    mealIndex = Math.floor(Math.random() * meals.length);
  }
  console.log("index:" + mealIndex);

  var meal = meals[mealIndex];
  //   console.log("time:" + meal.cookTime);
  mealImage.src = meal.image;
  mealRating.innerText = meal.rate;
  reviewCount.innerText = `(${meal.reviewCount} reviews)`;
  if (meal.prepTime >= 60) {
    prepTime.innerText = meal.prepTime / 60 + " hrs";
  } else {
    prepTime.innerText = meal.prepTime + " min";
  }
  if (meal.cookTime >= 60) {
    cookTime.innerText = meal.cookTime / 60 + " hrs";
  } else {
    cookTime.innerText = meal.cookTime + " min";
  }
  if (Number(meal.prepTime) + Number(meal.cookTime) >= 45) {
    timeWarning.classList.remove("d-none");
  } else {
    timeWarning.classList.add("d-none");
  }
  servings.innerText = meal.servings + " people";
  difficulty.innerText = meal.difficulty;
  category.innerText = meal.category;
  mealName.innerText = meal.name;
  description.innerHTML = meal.description;
  ingredientsList.innerHTML = "";
  for (var i = 0; i < meal.ingredients.length; i++) {
    // console.log(i);
    // console.log(meal.ingredients[i]);
    ingredientsList.innerHTML += `
                <div class="d-flex align-items-center mb-2">
                    <div class="ingredients-number">${i + 1}</div>
                    <li>${meal.ingredients[i]}</li>
                </div>`;
  }
  instructionsList.innerHTML = "";
  for (var i = 0; i < meal.instructions.length; i++) {
    // console.log(i);
    // console.log(meal.instructions[i]);
    instructionsList.innerHTML += `
                <div class="d-flex align-items-center mb-3">
                    <div class="instructions-number">${i + 1}</div>
                    <li>${meal.instructions[i]}</li>
                  </div>`;
  }
  mealCalories.innerText = meal.nutrition.calories;
  mealProtein.innerText = meal.nutrition.protein;
  mealCarbs.innerText = meal.nutrition.carbs;
  mealFat.innerText = meal.nutrition.fat;
  mealFiber.innerText = meal.nutrition.fiber;
  mealSodium.innerText = meal.nutrition.sodium;
  chefsTipsList.innerHTML = "";
  for (var i = 0; i < meal.chefsTips.length; i++) {
    // console.log(i);
    // console.log(meal.chefsTips[i]);
    chefsTipsList.innerHTML += `
                <div
                    class="d-flex align-items-center mb-3 p-3 ih-bg-amber-50 rounded ih-b-r-3 border-start border-4 ih-border-amber-400">
                    <i class="fa-solid fa-check-circle fs-5 me-2 ih-text-orange-500"></i>
                    <p class="mb-0">${meal.chefsTips[i]}</p>
                  </div>`;
  }
  currentMeal = mealIndex;
  //   console.log("current Meal:" + currentMeal);
  window.scrollTo({
    top: 0,
  });
}
