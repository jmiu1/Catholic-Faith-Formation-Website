"use client";

import { useState } from 'react';

export default function GodsExistence_KalamCosmological() {
    const [isHotelExpanded, setIsHotelExpanded] = useState(false);

    const toggleHotelSection = () => {
        setIsHotelExpanded(!isHotelExpanded);
    };

    return (
        <>
            <h1>The Kalam Cosmological Argument for God's Existence</h1>
            
            <p>
                The Kalam Cosmological argument is an incredibly strong, "go-to" argument for the existence of God used by many theologians defending various religions of the world.
            </p>

            <h2><u>Origins and Modern Popularization</u></h2>
            <p>
                It was originally formalized in the late 1000s AD by Al-Ghazali, an Islamic scholar who belonged to the Ash’ari school of Kalam (theology), which is where the argument gets its name.
                Kalam in Arabic means “speech” or “discourse”, however in the context of Islam is contextually used to refer to schools of theologians defending the islamic faith, which includes asserting the existence of God.
                <br /><br />
                Nowadays, in the 20th and 21st century, it has become commonly known primarily due to the efforts of Dr. William Lane Craig who published a book titled “The Kalam Cosmological Argument” in 1979.
                Dr. Craig holds a doctorate in philosophy, a second doctorate in theology, and is a tenured professor emeritus with over a decade in teaching theology.
                He has appeared on many podcasts, attended many debates, and is well-respected in academia.
                <br /><br />
                Dr. Craig did not just copy and paste the argument when writing his book.
                He applied modern astrophysics and advanced mathematics to defend the core logic of the argument.
                His book references the Big Bang Theory, the Sustained Expansion of the Universe (Hawking/Penrose), and logical paradoxes on infinites such as “Hilbert’s hotel”.
                While those are complex concepts to grasp, the core logic of the Kalam Cosmological argument is actually beautifully simple.
            </p>

            <h2><u>The Argument</u></h2>
            <p>
                The argument is structured as a formal logical syllogism - a classic form of deductive reasoning where a specific conclusion is logically drawn from two general propositions (premises).
                If the premises are accurate, the resulting conclusion is guaranteed to be true.
            </p>
            <ul className="spaced-list">
                <li><strong>Major premise:</strong> Everything that begins to exist has a cause</li>
                <li><strong>Minor premise:</strong> The universe began to exist</li>
                <li><strong>Conclusion:</strong> Therefore the universe had a cause</li>
            </ul>

            <p>
                Let’s break down each point individually and then stitch it all together.
            </p>

            <h2><u>“Everything that begins to exist has a cause”</u></h2>
            <p>
                This is the major premise of the syllogism, rooted in the principle of causality - the reality that things do not pop into existence out of nothing.
                Consider a few everyday examples:
            </p>
            <ul className="spaced-list">
                <li><u>An Automobile:</u> A car exists and began to exist. Its cause was an automotive engineer and a factory assembly line.</li>
                <li><u>An Apple:</u> An apple exists and began to exist. Its cause was a seed interacting with soil, water, and sunlight.</li>
            </ul>
            <p>
                Dr. Craig argues that denying this principle is intuitively impossible.
                To suggest that entire objects can just appear out of nothing without a root cause is completely ungrounded in our reality.
            </p>

            <h2><u>“The universe began to exist”</u></h2>
            <p>
                This is the minor premise of the syllogism.
                <br /><br />
                While philosophers asserted over a millennium ago that the universe had to have had a beginning, modern science and mathematics now compels us to accept this claim as fact.
                Dr. Craig uses the Big Bang Theory to assert the universe had a physical beginning in time, and he uses Hilbert’s hotel paradox to prove an infinite past is impossible. We’ll dive into both below.
            </p>

            <h3><u>The Big Bang Theory</u></h3>
            <p>
                In 1927, a Belgian Catholic priest and physicist named Fr. Georges Lemaître published a paper asserting that the universe was actively expanding.
                This directly challenged Albert Einstein’s deep philosophical preference for an unchanging, eternal cosmos.
                Einstein flatly resisted the idea, famously telling Lemaître: <em>"Your calculations are correct, but your physics is abominable". </em>
                To force his own mathematical models to show an eternal universe, Einstein had previously inserted an arbitrary mathematical buffer into his equations of General Relativity to keep the universe standing still on paper.
                <br /><br />
                Two years later, in 1929, astronomer Edwin Hubble looked through his telescope and visually proved that galaxies were indeed moving away from us, shattering the static universe model.
                Einstein traveled to California to see the data for himself, realizing he had let his biases cloud his judgment.
                He later attended a lecture by Lemaître detailing how this expansion meant the universe had a definitive beginning (the Big Bang).
                Einstein stood up, applauded, and declared: <em>"This is the most beautiful and satisfactory explanation of creation to which I have ever listened."</em>
                <br /><br />
                Hence, our greatest minds in astrophysics compel us to believe in the physical beginning of the universe.
                <br /><br />
                <strong>Note:</strong> If you would like to understand what Hubble and Einstein saw through the Hubble telescope - the forensic evidence if you will - proving the universe was expanding, I have linked Dr. Frank Turek’s (2015) summarization of the evidence in his acronym SURGE explained in his presentation: <a href="https://youtu.be/uwFM5LFjNHs?si=trT4QVyKeTHkmSGl" target="_blank" rel="noopener noreferrer">The Big Bang and the Beginning of the Universe on YouTube</a>.
            </p>

            <h3><u>Hilbert’s Hotel Paradox</u></h3>
            <p>
                This paradox is a bit more difficult to grasp, and do note that the Big Bang Theory above sufficiently proves the minor premise of “the universe began to exist”.
                Let this Hotel section serve as an optional continued investigation in the form of a theoretical mathematical dilemma.
                <br /><br />
                Dr. Craig uses the famous thought experiment named “Hilbert’s Hotel” by mathematician David Hilbert to prove an infinite past is mathematically impossible in the real world.
                <br /><br />
                Imagine a hotel with a finite number of rooms.
                If all rooms are full, the hotel manager must turn you away.
                Now, imagine a hotel with an infinite number of rooms, and every single room is occupied.
                If a new guest arrives and wants a room, the manager can simply shift the person in Room 1 to Room 2, Room 2 to Room 3, and so on, infinitely.
                Suddenly, Room 1 is empty, and the new guest checks in!
                Even though the hotel was completely full, it somehow easily accommodated a new guest.
                <br /><br />
                While this "infinite shifting" works as an abstract concept on a chalkboard, it creates massive logical absurdities if you try to build it in reality.
                Craig's point is that the past is just like this hotel.
                If the past were truly infinite, we would have had to count through an infinite number of yesterday's just to arrive at today.
                But you can't finish counting an infinite number of things.
                Therefore, history must have had a starting point.
                <br /><br />
                Admittedly, I (the website author) struggled to understand the above the first time reading it.
                Diving into it further enabled me to understand the mathematical contradiction, but I do simply rely on Big Bang Theory as satisfactory to prove the universe had a beginning.
                Here is the elaboration on the hotel dilemma applied to reality being a paradox that proves an eternal universe as an impossibility:
            </p>

            {/* Collapsible Section Container */}
            <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                <button 
                    onClick={toggleHotelSection}
                    style={{ padding: '10px 15px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    {isHotelExpanded ? 'Hide Deep Dive: The Countdown Paradox' : 'Show Deep Dive: The Countdown Paradox'}
                </button>
                
                {isHotelExpanded && (
                    <div style={{ marginTop: '15px' }}>
                        <p>
                            To see how this paradox when applied to reality disproves the claim of an eternal universe, we have to look at the difference between the future being infinite and the past being infinite.
                            <br /><br />
                            We have no problem imagining a future that goes on forever.
                            If you start counting right now (1, 2, 3, 4...), you can keep counting sequentially forever into the future.
                            Why?
                            Because you actually started at a definitive point (number 1).
                            <br /><br />
                            But an infinite past requires you to do the exact opposite.
                            It claims that history didn't have a starting point.
                            It requires you to look at today (Sunday) and say that an infinite number of yesterdays have already been counted and completed to get here.
                            <br /><br />
                            Craig uses a famous adaptation of the hotel paradox to show why this is a logical contradiction.
                            He asks you to imagine a man who claims to have been counting down from infinity, and just now finishes:
                            <br /><br />
                            <strong>"...-5, -4, -3, -2, -1, 0! I'm done!"</strong>
                            <br /><br />
                            Craig points out that this scenario is completely absurd.
                            If the man has been counting for an eternity, he would have already finished counting long ago.
                            In fact, no matter how far back in time you go, he would have already been counting for an infinity.
                            You can never find a moment where he actually "starts" or makes progress, because there is always an infinite amount of numbers left behind him.
                            <br /><br />
                            If you can never find a starting point to begin the countdown, you can never reach the end of the countdown.
                            <br /><br />
                            Now, swap out the numbers for actual calendar days:
                        </p>
                        <ul className="spaced-list">
                            <li>To get to today (Sunday), yesterday (Saturday) had to happen and finish.</li>
                            <li>To get to Saturday, Friday had to happen and finish.</li>
                            <li>If the past is eternal, then before we could ever reach today, an infinite number of days had to successfully finish passing by, one by one.</li>
                        </ul>
                        <p>
                            But by definition, an infinite amount of things can never be completed.
                            You can't finish an infinite playlist.
                            You can't reach the end of an infinite highway.
                            <br /><br />
                            So, if the past were infinite, history would be stuck on an "infinite highway" of yesterdays.
                            Time would have to cross an infinite number of days just to arrive at this exact moment.
                            But since you can't cross an infinite distance, today would never be able to arrive.
                            <br /><br />
                            Yet, here we are.
                            Today has arrived.
                            <br /><br />
                            Therefore, Craig concludes that history could not have been an infinite chain of days.
                            It must have had a starting point - a "Day 1" - which spits directly in the face of an eternal universe.
                        </p>
                    </div>
                )}
            </div>

            <h2><u>“Therefore the universe had a cause”</u></h2>
            <p>
                Because the major premise and minor premise are true, it logically follows that the conclusion is true.
                Or, in English, restating the argument itself, <em>“Because everything that begins to exist has a cause, and given the universe began to exist, therefore the universe has a cause”.</em>
                <br /><br />
                Who or what was that cause?
                <br /><br />
                This is where the Kalam argument elegantly bridges from physics into theology.
                By definition, the cause of the universe cannot exist inside the universe, just as an architect cannot be a brick inside the house they are building.
                Since the Big Bang represents the literal origin of all physical reality, the cause cannot be made of anything the universe is made of.
                <br /><br />
                Therefore, logical deduction tells us this cause must be:
            </p>
            <ul className="spaced-list">
                <li><strong>Timeless:</strong> Because it created time itself, it must exist outside of a timeline.</li>
                <li><strong>Spaceless:</strong> Because it created physical space, it cannot have physical dimensions or geometry.</li>
                <li><strong>Immaterial:</strong> Because it created all matter, it cannot be made of physical atoms or energy.</li>
                <li><strong>Enormously Powerful (Omnipotent):</strong> Because it brought an entire, vast cosmos into existence out of absolutely nothing (creatio ex nihilo).</li>
            </ul>
            <p>
                When we look at this description - a timeless, spaceless, immaterial, and overwhelmingly powerful uncaused cause - we find ourselves looking at the exact definition of what the world's major monotheistic religions call God.
            </p>

            {/* References */}
            <br /><br />
            <hr />
            <h4>Reference(s):</h4>
            <p className="citation">
                Al-Ghazali. (2013). <em>Al-Ghazali's "Moderation in Belief": Al-Iqtiṣād fī al-iʿtiqād</em> (A. M. Yaqub, Trans.). University of Chicago Press. (Original work published ca. 1095)
            </p>
            <p className="citation">
                Craig, W. L. (1979). <em>The Kalām cosmological argument</em>. Macmillan Press.
            </p>
            <p className="citation">
                Kragh, H. (2014). The controversial universe: David Hilbert and the rhetoric of infinity. <em>Archive for History of Exact Sciences</em>, 68(2), 257–270.
            </p>
            <p className="citation">
                Lemaître, G. (1931). The beginning of the world from the point of view of quantum theory. <em>Nature</em>, 127(3210), 706.
            </p>
            <p className="citation">
                Turek, F. [CrossExamined]. (2015, August 24). <em>The Big Bang and the beginning of the universe</em> [Video]. YouTube. https://youtu.be/uwFM5LFjNHs
            </p>
        </>
    );
}