

function Blog() {
    return (
        <div id="pagina" className="min-h-175 h-auto mx-5 md:mx-15 lg:mx-30">
            <div className="flex justify-center">
                <h1 className="text-2xl whitespace-pre-wrap">Thoughts On Art and Generative Machine Learning Models</h1>
            </div>
            <br></br>
            <div className="flex flex-row justify-center space-x-3">
                <p className="text-md">April 5th, 2026</p>
                <p> · </p>
                <p className="text-md">João P F Secundo</p>
            </div>
            <hr className="w-124 mx-auto h-px my-8 bg-neutral-400 border-0"></hr>
            <article className="font-serif flex text-md whitespace-pre-wrap prose mx-auto">{`
First of all, it's not all just black and white.

These thoughts are not on what could be "considered art" (that is a much deeper topic), but instead about *who* should get credit and what is considered a tool when creating art.

First, I make a parallel with scientific research.
    - A "collage" of existing scientific articles is accepted as its own work and can lead to new knowledge - Systematic mappings, literature summaries, etc. 
    - But the important point here is that there MUST be references in the work. If there aren't, it constitutes plagiarism. Sometimes even with references, it would still constitute plagiarism, depending on the nature of the work/piece.

Now I consider 2 cases where who should get credit for the art is very clear, case "white" and case "black", along with some cases "inbetween" them, where it's not necessarily clear who should get credit.

Let's start from case "black" and then gradually transition to case "white".

Case "black": What if person 1 asks person 2 to paint a tree?
    - Person 1 is not creditable for the art, Person 2 is.
    - But should the makers of the brushes that were used in the making of the picture be credited? And the makers of the canvas aswell?
        - No because they didn't take part on the creative work.


What if person 1 describes the line strokes that a person 2 should do on the canvas and person 2 applies them? For example: "Use the flat brush with color light-blue. On the bottom right corner, start with a light diagonal stroke from right to upper left". This is comparable to how students get credit for their research but so do their supervisors.
    - I would confidently say that person 1 and 2 are both creditable.


What if person 1 describes IN DETAIL the line strokes that a ROBOT should do on the canvas, and the robot does it? For example: "Use the flat brush with color light-brown and place a stroke with force of 0.034 newtons in a 33-degree curved line from the coordinate 45x 884y to coordinate 84x 350y"
    - Person 1 is probably creditable with the art. However, the level of detail in the description matters here. "Paint an apple on the bottom right" is very different from "Take the Filbert brush with color light-red and do 3 light circular strokes on the bottom right converging to coordinate XY"
    - Should the robot be credited? In most countries, objects or animals cannot hold copyrights, so the author(s) MUST be human(s).
    - Should all the makers of the robot be credited? Or only the person that programmed the robot's listening? Or only the person that developed the robot's hand movements? Probably none, just like how makers of brushes arent credited with art that was made using their brush. The robot is merely one of the tools used in the making of the art, and so is the canvas.


What if person 1 describes exactly the line strokes that a machine learning model trained only to interpret instructions of line strokes should do on a blank (or not blank canvas)? 
    - I believe person 1 could have some of the credit
    - But should the people that developed the model have credit aswell? Probably not. Mere tool.
    - What about the people that produced the data that was used in the training? The data isnt art, so probably not.


What if person 1 starts with an already painted canvas, and make modifications on it with the help of this machine learning model that takes line strokes instructions?
    - The person that made the initial art should obviously get credit
    - Should the person dictating the line strokes of modifications get credit aswell?
    - Should the developers of the model get credit aswell? Probably not (they just made the tool?)


What if person 1 gives a machine learning model trained on thousands of artist's works detailed instructions on how the elements of a picture should be made and where they should be on the canvas.
    - Should person 1 get any credit?
    - Should all the thousands of artists get credit? (Due to the nature of how deep learning models work, it is incredibly difficult to reverse engineer what exact data influenced in each "prompt", and thats even assuming the data is tagged with original creator. So the easiest would be to credit all of the artists whose art was used in the training.)


Case "white": If person 1 tells a machine learning model trained on thousands of artist's works to "paint a tree"
    - Just like in the "black" case, person 1 does not deserve credit.
    - All the thousands of artists should get the credit.

Is a brush a tool?
Is a robot a tool?
Is an intelligent agent that converts speech into line strokes a tool? 
    - Maybe it could be used to allow disabled people to paint.
Is a machine learning model trained on 1 artist's work a tool? 
    - Maybe it could be used to replicate an artist's style. But the artist should probably have a say on it.
Is a machine learning model trained on the works of thousands of artists a tool? 
    - But none of these artists ever got the choice to opt out or in. And they will most certainly not be cited or given any credit whatsoever.

On another note...

Many don't realize, but both humans and machines learn the same way - by example. 
Having said that, some may think that there's no difference between how a human paints from learning from an artist's artwork and how a ML model paints from learning from the same artist's artwork.
Well I can think of 2 differences:
    - 1st is that humans are non deterministic and inherently "random", while ML models follow deterministic rules during training, even though there is some randomness involved too. 
    - 2nd is that a ML model can't, by themselves, go beyond what was learned and create something new. They don't have "creativity" systems (yet?). While humans can, and do.

            `}</article>

            <hr></hr>
        </div>
    )
}

export default Blog