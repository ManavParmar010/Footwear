import { tag } from './app/shared/models/Tag';
import {Shoe} from './app/shared/models/shoe';

export const sample_shoes: Shoe[] =[
    {
        "id": "1",
        "name": "Air Jordan 1 Retro High OG",
        "Price": 16995.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/6c389fcd-8609-4632-8eee-0f3449652b68/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png",
        "Size": [
            6,
            7,
            8,
            9,
            10,
            11,
            12
        ],
        "category": 1,
        "categoryName":"Highs",
        "colour": "True Blue/Cement Grey/White",
        "description":"The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with a familiar feel. Premium materials with new colours and textures give modern expression to an all-time favourite.",
        "stars":3,
        "favorite":false
    },
    {
        "id": "2",
        "name": "Air Jordan I High G",
        "Price": 16995.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/b9b99008-1ac7-492f-818b-335da669da69/air-jordan-i-high-g-golf-shoes-qKzTBg.png",
        "Size": [
            6,
            7,
            8,
            9,
            10
        ],
        "category":1,
        "categoryName":"Highs",
        "colour": " White/Midnight Navy/Wolf Grey/Metallic Silver",
        "description":"Feel unbeatable, from the tee box to the final putt. Inspired by one of the most iconic sneakers of all time, the Air Jordan 1 G is an instant classic on the course. With Air cushioning underfoot, a Wings logo on the heel and an integrated traction pattern to help you power through your swing, it delivers all the clubhouse cool of the original AJ1—plus everything you need to play 18 holes in comfort.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "3",
        "name": "Jordan 1 KO",
        "Price": 12495.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/9117b8a7-8e50-4f02-a96f-a4a9598ab8a6/jordan-1-ko-shoes-RLJcHC.png",
        "Size": [
            6
        ],
        "category": 1,
        "categoryName":"Highs",
        "colour": "  White/Grey Fog/Sail/Black",
        "description":"The Jordan 1 inspires admiration among collectors and next-gen fans alike. The Jordan 1 KO repackages the famous icon using a mix of synthetic leather and canvas, with a fit that's redesigned for comfort.",
        "stars":3,
        "favorite":true

    },
    {
        "id": "4",
        "name": "Air Jordan 1 Zoom CMFT 2",
        "Price": 13295.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/19d5a091-939a-4aeb-9865-eba68961b94d/air-jordan-1-zoom-cmft-2-shoes-nX8Qqx.png",
        "Size": [
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            14
        ],
        "category": 1,
        "categoryName":"Highs",
        "colour": "Palomino/Wild Berry/Desert/Melon Tint",
        "description":"Premium suede and Jordan Brand's signature Formula 23 foam come together to give you an extra luxurious (and extra cosy) AJ1. You don't need to play \"either or\" when it comes to choosing style or comfort with this one—which is nice, 'cause you deserve both.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "5",
        "name": "Air Jordan 6 Retro",
        "Price": 18395.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/af407608-9bbd-4140-8f5a-e1a24284574d/air-jordan-6-retro-shoes-4m3b9d.png",
        "Size": [
            6,
            7,
            8,
            9,
            10,
            11
        ],
        "category": 2,
        "categoryName":"Mids",
        "colour": "White/Cool Grey/Medium Grey",
        "description":"Be cool. Stay cool. The AJ-6 \"Cool Grey\" lets your style take flight with a colourway rooted to Jordan Brand DNA. MJ wore 'em when he claimed his first championship and you'll be wearing 'em for—well, whatever you want. Laden with sleek features like dynamic design lines and an iced outsole, these sneakers bring speed and class to any 'fit. After all, they were famously inspired by Jordan's (wait for it) COOL sports car. So lace up and let your kicks do the rest.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "6",
        "name": "Air Jordan 7 Retro",
        "Price": 18395.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/27dccc44-1449-4372-9ad8-177a025e47f6/air-jordan-7-retro-shoes-xbNFP8.png",
        "Size": [
            6,
            7,
            8
        ],
        "category": 2,
        "categoryName":"Mids",
        "colour": "White/Cardinal Red/Chutney/Black",
        "description":"Lace up in the glory of MJ's second championship season with these throwback AJ7s. They're inspired by the classic '92 silhouette but updated with some 2022 fire, decked out in quality leather uppers and premium Air cushioning.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "7",
        "name": "Air Jordan 1 Mid SE",
        "Price": 8747.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/cfb8dda3-245d-44d8-8e65-3793df07a087/air-jordan-1-mid-se-shoes-hHltxp.png",
        "Size": [
            6,
            7,
            8
        ],
        "category": 2,
        "categoryName":"Mids",
        "colour": " Black/Sail/Roma Green/Chile Red",
        "description":"Every time the AJ1 gets a remake, you get the classic sneaker in new colours and textures for an exciting, revamped look but with all the familiar comforts you know. Premium materials and accents give modern expression to an all-time favourite.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "8",
        "name": "Air Jordan XXXVII PF",
        "Price":14697.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/9f68d99d-756c-4691-af9a-f02eaca628f3/air-jordan-xxxvii-pf-basketball-shoes-FxrCGw.png",
        "Size": [
            6,
            7,
            8
        ],
        "category": 2,
        "categoryName":"Mids",
        "colour": "White/Light Silver/Black/True Red",
        "description":"You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about takeoffs and landings, with multiple Air units to get you off the ground and Formula 23 foam to cushion your impact. Up top, you'll find layers of tough, reinforced leno-weave fabric that'll keep you contained—and leave your game uncompromised—no matter how fast you move.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "9",
        "name": "Air Jordan Legacy 312 Low",
        "Price": 12995.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/13e5e642-0f11-4969-99e7-e11cfced8d1c/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
        "Size": [
            7,
            8,
            9,
            10,
            11
        ],
        "category": 3,
        "categoryName":"Lows",
        "colour": "White/Wolf Grey/Washed Teal",
        "description":"The Air Jordan Legacy 312 Low celebrates Michael Jordan's legacy with this shout-out to Chicago's 312 area code. The design creates a modern mash-up of iconic Jordan elements.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "10",
        "name": "Air Jordan 2 Retro Low Titan",
        "Price": 17247.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/fec7649b-7347-40ac-a897-edc21a66a83d/air-jordan-2-retro-low-titan-shoes-753NG3.png",
        "Size": [
            6,
            7,
            8,
            9,
            10,
            11
        ],
        "category": 3,
        "categoryName":"Lows",
        "colour": " Sail/Chlorophyll/Coconut Milk/Safety Orange",
        "description":"Spread the love. Tell the stories. Step into greatness. Teaming up with Filipino basketball collective, Titan, this timeless take on the AJ2 bridges past, present and future. With an unquestionable passion for the game, designer Chi Loyzaga-Gibbs sets the stage with an honorary look that's rooted to the beloved 1954 Filipino national team. Premium suede, richly textured corduroy and crisp leather are combined with a speckled midsole, while original artwork connects you to the hoops heartbeat no matter where you are.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "11",
        "name": "Jordan Delta 2 x CLOT",
        "Price": 12317.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f666b08b-7e40-4fd3-9e38-4125e08f052e/jordan-delta-2-clot-shoes-gVRsjW.png",
        "Size": [
            5,
            6,
            7,
            8
        ],
        "category": 3,
        "categoryName":"Lows",
        "colour": " White/Iron Grey/Navy/Multi-Colour",
        "description":"With a design sensibility that bridges East and West, CLOT founder Edison Chen brings his expressive style to a fresh collab. Pairing DNA from the AJ13 with a coveted colourway, he delivers an original look that remains rooted to Jordan heritage. Full of intricate detailing (check out the holographic hangtag and 2-layer mesh-foam upper), Chen effortlessly merges icons so you can step into the future of off-court style. Insole graphics and rubberised tongue logos seal the deal—this is an undeniably impeccable look.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "12",
        "name": "Jordan One Take 4 PF",
        "Price": 8695.00,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/24bbe703-4111-423a-9db5-caa260590bfc/jordan-one-take-4-pf-shoes-cdsVn1.png",
        "Size": [
            6,
            7,
            8
        ],
        "category": 3,
        "categoryName":"Lows",
        "colour": "White/Pink Blast/Photon Dust/Game Royal",
        "description":"Get that speed you need, just like Russ. Inspired by Russell Westbrook's latest signature shoe, the outsole of the Jordan One Take 4 wraps up nearly to the midsole so you can start, stop or change direction in an instant. Meanwhile, energy-returning Zoom Air cushioning in the forefoot keeps you goin' (and goin' and goin').",
        "stars":3,
        "favorite":true
    },
    {
        "id": "13",
        "name": "Nike Air Max Cirro",
        "Price": 3695.00,
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d8a3fa0b-0777-4d1d-be98-5a9301a411be/air-max-cirro-slides-96vclH.png",
        "Size": [
            7,
            8,
            9,
            10,
            11
        ],
        "category": 4,
        "categoryName":"Sliders",
        "colour": "Black/Volt/White",
        "description":"Whether you're hitting the gym or heading to the shops, we've created a perfect go-between that delivers quick style and incredible comfort. Large, visible Air in the heel is paired with a comfy foam footbed for a striking statement in comfort.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "14",
        "name": "Jordan Break",
        "Price": 1995.00,
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2719fb21-2110-44a4-ba9e-b87b9f2859ed/jordan-break-slides-QmwKlG.png",
        "Size": [
            6,
            7,
            8,
            9,
            10,
            11
        ],
        "category": 4,
        "categoryName":"Sliders",
        "colour": " Black/White/University Red",
        "description":"Featuring a fixed strap over the top of the foot, the Jordan Break Slide uses durable synthetic leather and lightweight foam cushioning for underfoot comfort.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "15",
        "name": "Nike Victori One",
        "Price": 2595.00,
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c1d24d16-7de5-4245-8442-4f11bb0c8acc/victori-one-printed-slide-2ZsMWk.png",
        "Size": [
            5,
            6,
            7,
            8,
            9,
            10,
            11
        ],
        "category": 4,
        "categoryName":"Sliders",
        "colour": " Black/Black/White",
        "description":"From the beach to the bleachers, the Nike Victori One perfects a classic, must-have design. Delivering lightweight comfort that's easy to wear, it's updated with softer, more responsive foam. The contoured grip pattern helps cradle and hold your foot in place while the new padded strap feels as good as it looks.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "16",
        "name": "Nike Asuna 2",
        "Price": 2995.00,
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/588e025e-9a6c-4a0b-aefe-b476f576f96a/asuna-2-slides-9CjWbM.png",
        "Size": [
            6,
            7,
            8,
            9,
            10,
            11
        ],
        "category": 4,
        "categoryName":"Sliders",
        "colour": "Medium Olive/Wheat Gold/Black",
        "description":"Want to transition effortlessly between worlds? Built to feel good all day, this plush slide uses a rugged tread pattern for traction on a variety of surfaces. Step in, cinch it closed and get going.",
        "stars":3,
        "favorite":true
    },
    {
        "id": "17",
        "name": "Nike Burrow SE",
        "Price": 4695.00,
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3bce42e2-9016-401f-8d9c-2123f8295ddb/burrow-se-slippers-CK6lzh.png",
        "Size": [
            6,
            7,
            8,
            9,
            10,
            11
        ],
        "category": 4,
        "categoryName":"Sliders",
        "colour": " Pilgrim/Limestone/Elemental Gold/Black",
        "description":"There's nothing like cosying up to a campfire, which is why we made the extra-toasty, super-comfortable Nike Burrow. Its fleece-like liner gives you the perfect wintertime warmth and fireside feel. The marshmallow-soft foam midsole/outsole sweetens the deal. Slip them on and get lounging or step out of the tent and enjoy the fresh mountain air.",
        "stars":3,
        "favorite":true
    }
]

export const sample_tag:tag[]=
[
    {name:'All' , count:17},
    {name:'Highs' , count:4},
    {name:'Mids' , count:4},
    {name:'Lows' , count:4},
    {name:'sliders' , count:5},
]