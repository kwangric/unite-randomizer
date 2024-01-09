// Pokémon
const fullPokemonList = {
    'Absol': {
        'role': 'Speedster',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Night Slash', 'Pursuit'],
        'move2': ['Psycho Cut', 'Sucker Punch']
    },
    'Aegislash': {
        'role': 'All-Rounder',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Sacred Sword', 'Shadow Claw'],
        'move2': ['Wide Guard', 'Iron Head']
    },
    'Azumarill': {
        'role': 'All-Rounder',
        'difficulty': 'Novice',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Play Rough', 'Water Pulse'],
        'move2': ['Whirlpool', 'Aqua Tail']
    },
    'Blastoise': {
        'role': 'Defender',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Hydro Pump', 'Water Spout'],
        'move2': ['Surf', 'Rapid Spin']
    },
    'Blaziken': {
        'role': 'All-Rounder',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Fire Punch', 'Overheat'],
        'move2': ['Focus Blast', 'Blaze Kick']
    },
    'Blissey': {
        'role': 'Supporter',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Special',
        'move1': ['Egg Bomb', 'Helping Hand'],
        'move2': ['Soft-Boiled', 'Safeguard']
    },
    'Buzzwole': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Lunge', 'Smack Down'],
        'move2': ['Leech Life', 'Superpower']
    },
    'Chandelure': {
        'role': 'Attacker',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Flamethrower', 'Overheat'],
        'move2': ['Poltergeist', 'Imprison']
    },
    'Charizard': {
        'role': 'All-Rounder',
        'difficulty': 'Novice',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Flamethrower', 'Fire Punch'],
        'move2': ['Fire Blast', 'Flare Blitz']
    },
    'Cinderace': {
        'role': 'Attacker',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Physical',
        'move1': ['Pyro Ball', 'Blaze Kick'],
        'move2': ['Flame Charge', 'Feint']
    },
    'Clefable': {
        'role': 'Supporter',
        'difficulty': 'Novice',
        'attackStyle': 'Melee',
        'attackType': 'Special',
        'move1': ['Moonlight', 'Draining Kiss'],
        'move2': ['Gravity', 'Follow Me']
    },
    'Comfey': {
        'role': 'Supporter',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Floral Healing', 'Sweet Kiss'],
        'move2': ['Magical Leaf', 'Grass Knot']
    },
    'Cramorant': {
        'role': 'Attacker',
        'difficulty': 'Expert',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Surf', 'Dive'],
        'move2': ['Hurricane', 'Air Slash']
    },
    'Crustle': {
        'role': 'Defender',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Rock Tomb', 'Shell Smash'],
        'move2': ['Stealth Rock', 'X-Scissor']
    },
    'Decidueye': {
        'role': 'Attacker',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Physical',
        'move1': ['Razor Leaf', 'Spirit Shackle'],
        'move2': ['Leaf Storm', 'Shadow Sneak']
    },
    'Delphox': {
        'role': 'Attacker',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Fire Blast', 'Mystical Fire'],
        'move2': ['Fire Spin', 'Flame Charge']
    },
    'Dodrio': {
        'role': 'Speedster',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Tri Attack', 'Drill Peck'],
        'move2': ['Agility', 'Jump Kick']
    },
    'Dragapult': {
        'role': 'Attacker',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Physical',
        'move1': ['Dragon Breath', 'Shadow Ball'],
        'move2': ['Dragon Dance', 'Phantom Force']
    },
    'Dragonite': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Physical',
        'move1': ['Dragon Dance', 'Extreme Speed'],
        'move2': ['Hyper Beam', 'Outrage']
    },
    'Duraludon': {
        'role': 'Attacker',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Physical',
        'move1': ['Flash Cannon', 'Dragon Pulse'],
        'move2': ['Dragon Tail', 'Stealth Rock']
    },
    'Eldegoss': {
        'role': 'Supporter',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Pollen Puff', 'Leaf Tornado'],
        'move2': ['Cotton Guard', 'Cotton Spore']
    },
    'Espeon': {
        'role': 'Attacker',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Psyshock', 'Stored Power'],
        'move2': ['Psybeam', 'Future Sight']
    },
    'Garchomp': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Dig', 'Dragon Rush'],
        'move2': ['Earthquake', 'Dragon Claw']
    },
    'Gardevoir': {
        'role': 'Attacker',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Psychic', 'Moonblast'],
        'move2': ['Psyshock', 'Future Sight']
    },
    'Gengar': {
        'role': 'Speedster',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Special',
        'move1': ['Shadow Ball', 'Sludge Bomb'],
        'move2': ['Dream Eater', 'Hex']
    },
    'Glaceon': {
        'role': 'Attacker',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Icicle Spear', 'Icy Wind'],
        'move2': ['Ice Shard', 'Freeze Dry']
    },
    'Goodra': {
        'role': 'Defender',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Special',
        'move1': ['Muddy Water', 'Dragon Pulse'],
        'move2': ['Power Whip', 'Acid Spray']
    },
    'Greedent': {
        'role': 'Defender',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Bullet Seed', 'Belch'],
        'move2': ['Stuff Cheeks', 'Covet']
    },
    'Greninja': {
        'role': 'Attacker',
        'difficulty': 'Expert',
        'attackStyle': 'Ranged',
        'attackType': 'Physical',
        'move1': ['Water Shuriken', 'Surf'],
        'move2': ['Double Team', 'Smokescreen']
    },
    'Hoopa': {
        'role': 'Supporter',
        'difficulty': 'Expert',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Phantom Force', 'Shadow Ball'],
        'move2': ['Hyperspace Hole', 'Trick']
    },
    'Inteleon': {
        'role': 'Attacker',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Fell Stinger', 'Acrobatics'],
        'move2': ['Snipe Shot', 'Liquidation']
    },
    'Lapras': {
        'role': 'Defender',
        'difficulty': 'Intermediate',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Water Pulse', 'Perish Song'],
        'move2': ['Bubble Beam', 'Ice Beam']
    },
    'Leafeon': {
        'role': 'Speedster',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Razor Leaf', 'Solar Blade'],
        'move2': ['Aerial Ace', 'Leaf Blade']
    },
    'Lucario': {
        'role': 'All-Rounder',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Extreme Speed', 'Power-Up Punch'],
        'move2': ['Bone Rush', 'Close Combat']
    },
    'Machamp': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Close Combat', 'Cross Chop'],
        'move2': ['Dynamic Punch', 'Submission']
    },
    'Mamoswine': {
        'role': 'Defender',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Icicle Crash', 'Ice Fang'],
        'move2': ['High Horsepower', 'Earthquake']
    },
    'Meowscarada': {
        'role': 'Speedster',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Flower Trick', 'Night Slash'],
        'move2': ['Double Team', 'Trailblaze']
    },
    'Metagross': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Meteor Mash', 'Gyro Ball'],
        'move2': ['Zen Headbutt', 'Magnet Rise']
    },
    'Mew': {
        'role': 'Attacker',
        'difficulty': 'Expert',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Electro Ball', 'Solar Beam', 'Surf'],
        'move2': ['Coaching', 'Light Screen', 'Agility']
    },
    'Mewtwo X': {
        'role': 'All-Rounder',
        'difficulty': 'Novice',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Future Sight', 'Psystrike'],
        'move2': ['Recover', 'Teleport']
    },
    'Mewtwo Y': {
        'role': 'Attacker',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Future Sight', 'Psystrike'],
        'move2': ['Recover', 'Teleport']
    },
    'Mimikyu': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Play Rough', 'Shadow Claw'],
        'move2': ['Shadow Sneak', 'Trick Room']
    },
    'Mr. Mime': {
        'role': 'Supporter',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Special',
        'move1': ['Confusion', 'Psychic'],
        'move2': ['Barrier', 'Power Swap']
    },
    'Ninetales': {
        'role': 'Attacker',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Avalanche', 'Dazzling Gleam'],
        'move2': ['Blizzard', 'Aurora Veil']
    },
    'Pikachu': {
        'role': 'Attacker',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Electro Ball', 'Thunder'],
        'move2': ['Volt Tackle', 'Thunderbolt']
    },
    'Sableye': {
        'role': 'Support',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Knock Off', 'Shadow Sneak'],
        'move2': ['Feint Attack', 'Confuse Ray']
    },
    'Scizor': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Bullet Punch'],
        'move2': ['Double Hit', 'Swords Dance']
    },
    'Scyther': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Dual Wingbeat'],
        'move2': ['Double Hit', 'Swords Dance']
    },
    'Slowbro': {
        'role': 'Defender',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Scald', 'Surf'],
        'move2': ['Amnesia', 'Telekinesis']
    },
    'Snorlax': {
        'role': 'Defender',
        'difficulty': 'Novice',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Heavy Slam', 'Flail'],
        'move2': ['Block', 'Yawn']
    },
    'Sylveon': {
        'role': 'Attacker',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Mystical Fire', 'Hyper Voice'],
        'move2': ['Draining Kiss', 'Calm Mind']
    },
    'Talonflame': {
        'role': 'Speedster',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Flame Charge', 'Aerial Ace'],
        'move2': ['Fly', 'Brave Bird']
    },
    'Trevenant': {
        'role': 'Defender',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Wood Hammer', 'Curse'],
        'move2': ['Horn Leech', 'Pain Split']
    },
    'Tsareena': {
        'role': 'All-Rounder',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Triple Axel', 'Stomp'],
        'move2': ['Trop Kick', 'Grassy Glide']
    },
    'Tyranitar': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Dark Pulse', 'Stone Edge'],
        'move2': ['Ancient Power', 'Sand Tomb']
    },
    'Umbreon': {
        'role': 'Defender',
        'difficulty': 'Novice',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Mean Look', 'Foul Play'],
        'move2': ['Wish', 'Snarl']
    },
    'Urshifu': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Wicked Blow', 'Surging Strikes'],
        'move2': ['Throat Chop', 'Liquidation']
    },
    'Venusaur': {
        'role': 'Attacker',
        'difficulty': 'Novice',
        'attackStyle': 'Ranged',
        'attackType': 'Special',
        'move1': ['Sludge Bomb', 'Giga Drain'],
        'move2': ['Solar Beam', 'Petal Dance']
    },
    'Wigglytuff': {
        'role': 'Supporter',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Special',
        'move1': ['Double Slap', 'Dazzling Gleam'],
        'move2': ['Rollout', 'Sing']
    },
    'Zacian': {
        'role': 'All-Rounder',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Metal Claw', 'Sacred Sword'],
        'move2': ['Agility', 'Play Rough']
    },
    'Zeraora': {
        'role': 'Speedster',
        'difficulty': 'Intermediate',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Volt Switch', 'Spark'],
        'move2': ['Discharge', 'Wild Charge']
    },
    'Zoroark': {
        'role': 'Speedster',
        'difficulty': 'Expert',
        'attackStyle': 'Melee',
        'attackType': 'Physical',
        'move1': ['Shadow Claw', 'Cut'],
        'move2': ['Night Slash', 'Feint Attack']
    }
}

let pokemonList = {...fullPokemonList}

const generate = () => {
    let pokemon = Object.keys(pokemonList)[Math.floor(Math.random()*Object.keys(pokemonList).length)]
    let move1 = pokemonList[pokemon]['move1'][Math.floor(Math.random()*pokemonList[pokemon]['move1'].length)]
    let move2 = pokemonList[pokemon]['move2'][Math.floor(Math.random()*pokemonList[pokemon]['move2'].length)]
    
    document.getElementById('pokemon-name').innerText = pokemon
    document.getElementById('move1').innerText = move1
    document.getElementById('move2').innerText = move2
}

document.getElementById('roll').addEventListener('click', generate)