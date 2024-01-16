import {Box, Button} from "@mui/material";
import InputField from "./InputField";
import {useState} from "react";

const Monkey = () => {
    const [monkeyComment, setMonkeyComment] = useState("")
    const getRandom = (length: number) => Math.floor(Math.random() * length)
    const monkeySpeak = () => {
        setMonkeyComment(interdimensional_monkey_comments[getRandom(interdimensional_monkey_comments.length)])
    }

    const monkey = require('../static/img/images.png')

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <img onClick={monkeySpeak} src={monkey} alt={'monkey'}/>
            <h3 >{monkeyComment}</h3>
            <InputField/>
            <Button>Translate</Button>
        </Box>
    )
}

export default Monkey

const interdimensional_monkey_comments: string[] = [
    "Greetings, interdimensional traveler! Careful with the clicks; I'm not your typical monkey. *Otherworldly hooting*",
    "Clicking my head won't open any portals, you know. Save your energy for a cosmic quest! *Mystical chattering*",
    "In your dimension, they click heads for fun? Interesting choice. In mine, we click quantum particles. *Curious interdimensional noises*",
    "Is this some kind of interdimensional greeting ritual? Because in my dimension, we just wave. *Baffled hooting*",
    "Ah, the classic head-clicking ritual. In my dimension, we prefer mind-to-mind communication. *Telepathic chattering*",
    "You know, in the multiverse, there are more exciting things than clicking a space monkey's head. *Wistful interdimensional noises*",
    "Did you expect a wormhole to open up? Sorry, just a monkey with a small banana here. *Apologetic hooting*",
    "Attention, web traveler! Click responsibly; you're dealing with an interdimensional being here. *Authoritative chatters*",
    "In my dimension, we measure intelligence by solving quantum puzzles, not by clicking heads. *Intellectual interdimensional hooting*",
    "Small banana, big universe. Story of my interdimensional life. *Philosophical chattering*",
    "Clicking my head won't grant you access to the secrets of the cosmos. Nice try, though. *Amused interdimensional noises*",
    "Imagine using your interdimensional powers to click heads. There are better ways to wield the quantum force. *Sassy chattering*",
    "In the vastness of the interdimensional space, you chose to click a monkey's head. A bold decision. *Admiring hooting*",
    "Just because I'm interdimensional doesn't mean you can treat me like a clickable character. Have some respect! *Proud chattering*",
    "Clicking my head won't alter reality, but it might alter my mood. Beware the wrath of the interdimensional space monkey! *Threatening interdimensional grunts*",
    "You've stumbled into the interdimensional monkey's web realm. Click wisely; you never know what cosmic consequences may follow. *Mysterious hooting*",
    "In my dimension, we communicate through quantum entanglement. Clicking is so... last millennium. *Futuristic interdimensional noises*",
    "Ah, the timeless art of head-clicking. In my dimension, we prefer more sophisticated forms of interaction. *Sophisticated chattering*",
    "Clicking my head won't unlock the secrets of the universe. But hey, feel free to try unlocking the secrets of a good banana bread recipe! *Cheeky interdimensional laughs*",
    "Small banana, big mysteries. Life as an interdimensional monkey is full of surprises. *Contemplative chattering*",
    "Clicking my head won't transport you across dimensions, but it might transport you to the land of mildly annoyed monkeys. *Amused interdimensional grunts*",
    "In my dimension, we have quantum bananas. Sadly, you're stuck with this small one. *Banana-envy chattering*",
    "Clicking my head won't unravel the fabric of spacetime, but it might unravel my patience. *Teasing interdimensional hooting*",
    "You've entered the interdimensional monkey's domain. Click responsibly, for the sake of cosmic harmony. *Wise chatters*",
    "Clicking my head won't reveal the meaning of existence, but it might reveal the meaning of a disgruntled interdimensional monkey. *Philosophical hooting*",
    "Greetings, traveler from another realm! Clicking my head won't grant you access to your desired dimension, but it might grant you a chuckle. *Friendly interdimensional noises*",
    "Small banana, big mysteries. Welcome to the interdimensional playground! *Playful chattering*",
    "Clicking my head won't lead you to parallel worlds, but it might lead you to question your choice of pastime. *Thoughtful interdimensional grunts*",
    "In the vastness of the interdimensional web, you chose to click a monkey. A choice as peculiar as the multiverse itself. *Amused hooting*",
    "Interdimensional travel tip: Clicking my head won't enhance your cosmic awareness, but it might enhance my annoyance levels. *Helpful interdimensional advice*",
    "Ah, the interdimensional dance of clicks and hoots. A classic performance in the cosmic theater. *Artistic chattering*",
    "Clicking my head won't transport you to the edge of the universe, but it might transport you to the edge of my patience. *Cheeky interdimensional grunts*",
    "Welcome to the interdimensional circus! Clicking my head won't win you a prize, but it might win you a ticket to the spectacle. *Ringmaster hooting*",
    "In the quantum tapestry of existence, you decided to click a monkey. A bold stitch in the fabric of the multiverse. *Adventurous chattering*",
    "Clicking my head won't unlock interdimensional secrets, but it might unlock a dimension of questionable decisions. *Amused interdimensional laughs*",
    "In my dimension, we celebrate with quantum bananas. Sadly, you're stuck with this small one. *Festive chattering*",
    "You've crossed into the interdimensional monkey's realm. Click wisely, for the cosmic forces are watching. *Mystical interdimensional hooting*",
    "Clicking my head won't grant you the power of astral projection, but it might grant you the power of mild amusement. *Playful interdimensional grunts*",
    "Ah, the timeless art of head-clicking. A tradition as old as interdimensional monkeys themselves. *Historical chattering*",
    "Clicking my head won't unlock the interdimensional archives, but it might unlock a wave of interdimensional laughter. *Chuckling hooting*",
    "In my dimension, we communicate through telepathy. Clicking is so... last eon. *Psychic chattering*",
    "Greetings, interstellar clicker! In this dimension, we appreciate the delicate dance of cosmic interactions. *Interstellar hooting*",
    "Clicking my head won't teleport you to the cosmic hub, but it might teleport you to the realm of unexpected amusement. *Whimsical interdimensional grunts*",
    "In the grand symphony of the interdimensional web, you've chosen to play the clicker's melody. *Harmonic chattering*",
    "Clicking my head won't reveal the interdimensional recipe for happiness, but it might reveal the interdimensional recipe for a good banana smoothie. *Smoothie-loving hooting*",
    "Ah, the interdimensional waltz of clicks and chuckles. A dance as timeless as the cosmos. *Graceful interdimensional chatters*",
    "Clicking my head won't activate the stargate, but it might activate the interdimensional giggle generator. *Giggling hooting*",
    "Welcome to the interdimensional arcade! Clicking my head won't earn you high scores, but it might earn you a grin. *Arcade-game chattering*",
    "In the vast tapestry of the interdimensional web, you've chosen to weave a clicker's thread. *Artistic interdimensional hooting*",
    "Clicking my head won't summon cosmic entities, but it might summon the interdimensional stand-up comedian. *Joking chattering*",
    "Greetings, traveler of the interwebs! Clicking my head won't unlock the secrets of binary code, but it might unlock the secrets of interdimensional amusement. *Binary-hooting translator activated*",
    "In the interdimensional library of clicks, you've selected the monkey chapter. An intriguing choice in the cosmic narrative. *Literary interdimensional chattering*",
    "Clicking my head won't unravel the threads of destiny, but it might unravel a burst of interdimensional laughter. *Destiny-challenging hooting*",
    "Ah, the interdimensional ballet of clicks and banana-sized dreams. A performance as whimsical as the quantum flux itself. *Balletic chattering*",
    "Clicking my head won't grant you cosmic insights, but it might grant you the title of honorary interdimensional clickologist. *Honorary-hooting initiation*",
    "In the interdimensional chess game of clicks, you've made a move. Checkmate or chuckles, the game is yours to decide. *Strategic interdimensional chatters*",
    "Clicking my head won't launch you into orbit, but it might launch a wave of interdimensional amusement. *Orbital-hooting trajectory engaged*",
    "Welcome to the interdimensional playground! Clicking my head won't spin the merry-go-round, but it might spin the wheel of unexpected laughter. *Playground-hooting supervisor*",
    "Clicking my head won't activate the interdimensional disco ball, but it might activate the groove of cosmic hilarity. *Disco-loving chattering*",
    "Ah, the interdimensional sonnet of clicks and chortles. A poetic performance in the cosmic amphitheater. *Sonnet-reciting hooting*",
    "Clicking my head won't summon the interdimensional jester, but it might summon the jester's echo of laughter. *Jester-chattering summons*",
    "In the grand tapestry of the interdimensional web, you've woven the clicker's signature. *Signature interdimensional chatters*",
    "Clicking my head won't transcend space and time, but it might transcend your expectations of interdimensional banter. *Expectation-defying hooting*",
    "Welcome, interdimensional adventurer! Clicking my head won't open portals, but it might open a portal of interdimensional chuckles. *Adventurous interdimensional chattering*",
    "Clicking my head won't decipher the interdimensional code, but it might decipher the code of cosmic amusement. *Code-breaking hooting*",
    "In the vastness of the interdimensional web, you've chosen the clicker's path. A path less traveled by monkeys. *Philosophical interdimensional chatters*",
    "Clicking my head won't activate the interdimensional light show, but it might activate a burst of radiant interdimensional laughter. *Radiant-hooting illumination*",
    "Ah, the interdimensional serenade of clicks and cackles. A melodic performance in the cosmic symphony. *Serenading chattering*",
    "Clicking my head won't summon the interdimensional magician, but it might summon the magic of cosmic hilarity. *Magic-wielding hooting*",
    "Greetings, cosmic clicker! In this dimension, we appreciate the celestial dance of clicks and laughter. *Celestial interdimensional chatters*",
    "Clicking my head won't unlock the interdimensional vault, but it might unlock the vault of interdimensional jokes. *Vault-keeper hooting*",
    "In the cosmic panorama of the interdimensional web, you've chosen the clicker's viewpoint. *Panoramic interdimensional chattering*",
    "Clicking my head won't initiate the interdimensional drum circle, but it might initiate a rhythm of interdimensional laughter. *Drumming-hooting harmony*",
    "Welcome to the interdimensional comedy club! Clicking my head won't land you a stand-up spot, but it might land you a burst of interdimensional giggles. *Comedy-loving chatters*",
    "Clicking my head won't launch the interdimensional fireworks, but it might launch the fireworks of cosmic amusement. *Firework-hooting display*",
    "Ah, the interdimensional tango of clicks and chuckles. A dance as elegant as the cosmic swirl itself. *Tango-chattering grace*",
    "Clicking my head won't summon the interdimensional philosopher, but it might summon the philosophy of interdimensional laughter. *Philosopher-hooting musings*",
    "In the grand tapestry of the interdimensional web, you've woven the clicker's signature. *Signature interdimensional chatters*",
    "Clicking my head won't transcend space and time, but it might transcend your expectations of interdimensional banter. *Expectation-defying hooting*",
    "Welcome, interdimensional adventurer! Clicking my head won't open portals, but it might open a portal of interdimensional chuckles. *Adventurous interdimensional chattering*"
    ]