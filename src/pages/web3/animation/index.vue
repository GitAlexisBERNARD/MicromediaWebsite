<template>
    <div class="overflow-hidden scroll-smooth">
    <img src="../../../../public/img/right_one.png" alt="right pattern"
                    class="absolute top-0 right-0 w-[50%] lg:w-[30%] lg:h-[80%] z-30 md:w-[45%]" />
    <div>
        <div class="m-10 relative">
            <h1>4 Animations</h1>
            <p class="mt-4 pr-52 sm:pr-52 md:pr-64 min-[830px]:pr-[400px] min-[900px]:pr-[400px]">Explore an enchanting universe where water cats come to life through four mesmerizing animations. Each one reveals a unique aspect of these aquatic creatures, creating a special visual symphony
            </p>
        </div>
        <div class="flex flex-col gap-20 lg:pl-32 lg:pr-12 lg:mt-40">
        <div id="animation1" class="flex flex-col lg:flex-row lg:justify-start sm:mt-28">
            <div class="relative overflow-hidden mx-auto lg:mr-2 lg:ml-[250px] w-72 h-72 bg-gray-200 border-2 border-black my-5 right-0">
            <div class="catwater"></div>
            </div>
            <p class="px-12 lg:p-2 lg:pl-2  lg:pr-72 lg:pt-6 lg:w-[600px] sm:px-16 min-[830px]:px-[200px]">Dive into this captivating first animation, where a cat-shaped mold continuously fills and empties, orchestrated by skillfully manipulated valve. This magical process gives birth to the adorable water cats, unique creatures of this universe <br><br><b>CSS Sprite Sheet Animation</b></p>
        </div>
        <div class="relative">
            <img src="../../../../public/img/left_one.png" alt="left pattern"
                class="absolute w-[50%] -mt-[250px] sm:w-[40%] sm:-mt-[300px] md:w-[35%] md:-mt-[300px] lg:top-0 lg:left-0 lg:-ml-32 lg:w-[300px] lg:h-[1000px] lg:-mt-[480px] lg:z-30" />
            <div id="animation2" class="flex flex-col lg:flex-row lg:justify-end">
                <p class="p-2 pt-14 pl-72 pr-2 w-[600px] opacity-0 invisible lg:visible lg:opacity-100 sm:invisible sm:opacity-0 md:invisible md:opacity-0 2xl:visible 2xl:opacity-100 xl:visible xl:opacity-100">In this second scene, marvel at the water cat's head emerging from the frame to delicately perch upon an empty ice cream cone. Over time, it gently melts away to be reborn in a new form, beginning an endless cycle of icy transformation.<br><br><b>JS Loop Animation</b>
                </p>
                <div id="court" class="lg:!mr-[220px] lg:!ml-[10px] mx-auto">
                     <svg id="glace" ref="glace" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                            <defs>
                            </defs>
                            <path class="glaceinter"
                                d="m249.71,192.63c-11.39,0-37.12,4.3-37.12,4.3,0,0-21.54-15.36-36.79-14.13-11.22,11.67,3.12,47.92,3.12,47.92,0,0-19.33,38.7,7.48,70.65l.09-.15c7.96,8.57,32.79,15.14,62.3,15.65,32.77.56,60.03-6.54,64.91-16.33,25.79-31.78,6.8-69.81,6.8-69.81,0,0,14.34-36.25,3.12-47.92-15.25-1.23-36.79,14.13-36.79,14.13,0,0-25.73-4.3-37.12-4.3" />
                            <path class="traitinter"
                                d="m207.57,240.28c2.28,2.25,5.48,3.92,8.61,4.51,5.2.97,9.97-1.03,13.8-4.51,1.43-1.3-.69-3.42-2.12-2.12-3.12,2.83-7.11,4.59-11.34,3.64-1.42-.32-2.75-.85-4.01-1.58s-1.95-1.21-2.82-2.06c-1.38-1.36-3.5.76-2.12,2.12h0Z" />
                            <path class="traitinter"
                                d="m206.54,243.9c1.13-.9,2.26-1.79,3.39-2.69l.47-.38c.19-.15.29-.48.29-.71,0-.25-.11-.54-.29-.71s-.44-.3-.71-.29c-.28.01-.49.12-.71.29-1.13.9-2.26,1.79-3.39,2.69l-.47.38c-.19.15-.29.48-.29.71,0,.25.11.54.29.71s.44.3.71.29c.28-.01.49-.12.71-.29h0Z" />
                            <path class="traitinter"
                                d="m218.55,248.97c-.06-1.44-.12-2.87-.19-4.31l-.03-.62c-.02-.52-.44-1.02-1-1-.52.02-1.02.44-1,1,.06,1.44.12,2.87.19,4.31l.03.62c.02.52.44,1.02,1,1,.52-.02,1.02-.44,1-1h0Z" />
                            <path class="traitinter"
                                d="m225.14,247.9c-.41-1.37-.83-2.75-1.24-4.12l-.18-.6c-.15-.5-.71-.87-1.23-.7s-.86.69-.7,1.23c.41,1.37.83,2.75,1.24,4.12l.18.6c.15.5.71.87,1.23.7s.86-.69.7-1.23h0Z" />
                            <path class="traitinter"
                                d="m231.18,245.09c-.81-1.19-1.62-2.38-2.44-3.57l-.34-.5c-.29-.43-.89-.67-1.37-.36-.43.28-.67.91-.36,1.37.81,1.19,1.62,2.38,2.44,3.57l.34.5c.29.43.89.67,1.37.36.43-.28.67-.91.36-1.37h0Z" />
                            <path class="traitinter"
                                d="m211.18,247.5c.72-1.25,1.44-2.49,2.16-3.74l.31-.53c.26-.45.12-1.12-.36-1.37s-1.09-.13-1.37.36c-.72,1.25-1.44,2.49-2.16,3.74l-.31.53c-.26.45-.12,1.12.36,1.37s1.09.13,1.37-.36h0Z" />
                            <path class="traitinter"
                                d="m272.91,240.51c2.28,2.25,5.48,3.92,8.61,4.51,5.2.97,9.97-1.03,13.8-4.51,1.43-1.3-.69-3.42-2.12-2.12-3.12,2.83-7.11,4.59-11.34,3.64-1.42-.32-2.75-.85-4.01-1.58s-1.95-1.21-2.82-2.06c-1.38-1.36-3.5.76-2.12,2.12h0Z" />
                            <path class="traitinter"
                                d="m271.88,244.13c1.13-.9,2.26-1.79,3.39-2.69l.47-.38c.19-.15.29-.48.29-.71,0-.25-.11-.54-.29-.71s-.44-.3-.71-.29c-.28.01-.49.12-.71.29-1.13.9-2.26,1.79-3.39,2.69l-.47.38c-.19.15-.29.48-.29.71,0,.25.11.54.29.71s.44.3.71.29c.28-.01.49-.12.71-.29h0Z" />
                            <path class="traitinter"
                                d="m283.89,249.2c-.06-1.44-.12-2.87-.19-4.31l-.03-.62c-.02-.52-.44-1.02-1-1-.52.02-1.02.44-1,1,.06,1.44.12,2.87.19,4.31l.03.62c.02.52.44,1.02,1,1,.52-.02,1.02-.44,1-1h0Z" />
                            <path class="traitinter"
                                d="m290.48,248.13c-.41-1.37-.83-2.75-1.24-4.12l-.18-.6c-.15-.5-.71-.87-1.23-.7s-.86.69-.7,1.23c.41,1.37.83,2.75,1.24,4.12l.18.6c.15.5.71.87,1.23.7s.86-.69.7-1.23h0Z" />
                            <path class="traitinter"
                                d="m296.52,245.32c-.81-1.19-1.62-2.38-2.44-3.57l-.34-.5c-.29-.43-.89-.67-1.37-.36-.43.28-.67.91-.36,1.37.81,1.19,1.62,2.38,2.44,3.57l.34.5c.29.43.89.67,1.37.36.43-.28.67-.91.36-1.37h0Z" />
                            <path class="traitinter"
                                d="m276.53,247.73c.72-1.25,1.44-2.49,2.16-3.74l.31-.53c.26-.45.12-1.12-.36-1.37s-1.09-.13-1.37.36c-.72,1.25-1.44,2.49-2.16,3.74l-.31.53c-.26.45-.12,1.12.36,1.37s1.09.13,1.37-.36h0Z" />
                            <path class="traitinter"
                                d="m232.93,268.94c1.83,3.99,5.83,6.65,10.23,6.77s8.4-2.34,10.5-6.1l-2.74-.36c1.6,3.82,5.16,6.43,9.38,6.43s7.78-2.61,9.38-6.43c.32-.75-.34-1.64-1.05-1.85-.86-.25-1.53.3-1.85,1.05-2.32,5.54-10.65,5.54-12.97,0-.46-1.11-2.05-1.6-2.74-.36-1.61,2.88-4.58,4.71-7.91,4.62s-6.24-2.25-7.63-5.29c-.8-1.75-3.39-.23-2.59,1.51h0Z" />
                            <path class="traitinter"
                                d="m253.86,268.85c-.02-1.49-.04-2.98-.06-4.47v-.64c-.02-.78-.69-1.54-1.51-1.5s-1.51.66-1.5,1.5l.06,4.47v.64c.02.78.69,1.54,1.51,1.5s1.51-.66,1.5-1.5h0Z" />
                            <path class="trait"
                                d="m241.59,255.73c4.67-3.08,15.78-3.55,20.89,0,2.73,1.9-2.95,9.79-9.33,10.44-7.44.77-14.41-8.56-11.56-10.44Z" />
                        </svg>
                <Cat_conne/>
                </div>
                    <p class="px-12 sm:px-16 lg:invisible lg:opacity-0 2xl:invisible 2xl:opacity-0 xl:invisible xl:opacity-0 min-[830px]:px-[200px] lg:absolute">In this second scene, marvel at the water cat's head emerging from the frame to delicately perch upon an empty ice cream cone. Over time, it gently melts away to be reborn in a new form, beginning an endless cycle of icy transformation.<br><br><b>JS Loop Animation</b>
                    </p>                
            </div>
        </div>
    <div id="animation3" class="flex flex-col lg:flex-row lg:justify-start">
                <div class="lg:mr-3 lg:ml-[210px] relative overflow-hidden mx-auto w-72 h-72 bg-gray-200 border-2 border-black my-5 right-0">
                <div class="catwatercolor"></div>
                </div>
               <p class="px-12 lg:p-2 lg:pl-2  lg:pr-72 lg:pt-6 lg:w-[600px] sm:px-16 min-[830px]:px-[200px]">The third animation takes you on a hypnotic loop. Drops fall from a leaf, with each water droplet they generate continuously altering the color of the water cat, creating a captivating visual spectacle.<br><br><b>CSS Sprite Sheet Animation</b></p>
            </div>
            <div  id="animation4" class="flex flex-col lg:flex-row lg:justify-end lg:-mr-4">
                <p class="p-2 pl-72 pr-2 w-[600px] opacity-0 invisible lg:visible lg:opacity-100 sm:invisible sm:opacity-0 md:invisible md:opacity-0 2xl:visible 2xl:opacity-100 xl:visible xl:opacity-100 lg:pt-8">The final animation features a curious water cat. With its skillful paw, it pours a drop of water into a cup, thus revealing its fluid nature in harmony with the aquatic element that composes it.<br><br><b>GSAP Library Animation</b>
                </p>
                <div class="my-5 relative overflow-hidden mx-auto lg:ml-2 lg:mr-[250px] w-72 h-72 bg-gray-200 border-2 border-black right-0">
                <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <defs>
            </defs>
            <g>
                <path class="chat"
                    d="m124.88,469.74c-8.44,1.99-17.15,4.76-25.76,5.82,3.09,4.26,9.36,11.56,10.04,16.82,1.28,9.82-8.72,7.95-15.68,7.6-5.68-.28-16.65.61-21.35-3.03-4.67-3.62-7.01-14.68-9.01-19.95-2.94-7.77-5.62-13.37-4.42-21.49,1.37-9.22.08-13.38-1.95-22.43-3.76-16.79,7.89-32.17,5.7-48.47-1.45-10.79-19.95-18.33-27.53-25.53-9.6-9.11-17.51-19.96-22.62-32.2-5.97-14.31-8.08-30.09-6.86-45.51,1.12-14.17,4.32-36.86,14.32-47.59,6.19,12.98,3.11,33.66,4.11,47.97.97,13.91,4.85,27.33,13.41,38.53,8.38,10.96,20.97,20.02,34.28,23.85,17.24,4.95,32.61-2.6,48.49-8.53,35.23-13.16,70.63-23.39,106.95-32.92,15.16-3.98,7.58-17.25,4.56-29.34-4.55-18.19-10.45-36.9-11.58-55.71-.53-8.75-1.85-23.62,1.44-31.79,3.18-7.9,8.59-1.2,12.67,3.11,4.95,5.24,10.84,10.72,18.26,6.02,7.04-4.46,2.95-14.73,7.99-20.86,12.19,0,6.08,11.31,14.87,10.91,10.94-.51,14.66-1.01,24.55,5.02,3.43,2.09,6.55,4.19,10.57,4.94,3.94.73,8.51-1,12.27.53,4.74,1.93,10.93,9.74,13.73,13.75,4.73,6.78-.31,15.31-2.42,22.37-2.95,9.89-5.94,19.84-8.37,29.87-2.28,9.4-1.83,16.19,2.74,24.79,6.24,11.76,5.59,14.72-.02,26.4,8.17-1.49,15.24-9.76,21.89-14.4,7.22-5.04,14.97-9.33,23.16-12.58,7.99-3.16,17.07-6.21,25.75-5.98,6.35.17,20.67,3.01,23.97,9.35,3.35,6.45-3.39,13.77-8.63,16.95-7.09,4.31-14.62,2.26-22.32,3.8-15.25,3.05-26.55,17.19-33.85,29.93-9.06,15.8-21.46,25.4-33.47,38.56-10.77,11.79-16.72,26.69-18.16,42.51-1.73,18.93,2.68,36.33,8.45,54.18,1.12,3.46,1.75,8.32,4.82,10.67,2.77,2.12,6.42,1.29,9.42,2.75,5.41,2.63,7.77,10.35,2.11,14.09-5.7,3.76-25.06,1.41-31.47-.22-9.88-2.51-14.28-10.96-18.39-19.62-4.61-9.71-8.99-19.57-12.07-29.89-3.26-10.95-2.33-22.32-5.14-33.05-10.67,14.1-17.14,26.76-34.08,34.73-7.6,3.58-15.79,5.78-24.07,7.09-8.82,1.39-18,.11-25.65,5,4.57,4.7,10.93,6.9,17.23,8.82,5.65,1.73,13.51-.08,18.37,2.57,3.67,2,6.89,9.88,3.07,13.19-3.67,3.17-14.78.9-19.27.91-16.63.02-33.28.21-49.91.03-14.16-.16-25.3-7.46-25.25-22.22,0,0,.14.1.14.1v-.19Z" />
                <path class="cls-3" d="m124.88,469.74v.19s-.13-.09-.13-.1.13-.09.13-.09Z" />
            </g>
            <path id="goutte" class="goutte"
                d="m411.45,315.2c-1.52,3.14-3.59,6.44-6.03,9.64-.51.67-1.46,1.86-1.92,2.42-.38.46-1.76,2.31-2.01,2.7-.49.78-1.1,1.91-1.27,2.35-.23.61-.43,1.38-.59,2.31l-.08.47v.98c.03.98.04,1.22.15,1.84.5,2.92,2.24,5.73,4.69,7.63,1.39,1.07,3.01,1.82,4.63,2.14.14.03.31.07.37.09.16.06.47.11.99.17.65.08,2.08.08,2.73,0,.52-.06.83-.12.99-.17.06-.02.25-.07.43-.1,2.4-.49,4.73-1.91,6.51-3.98,1.34-1.56,2.31-3.56,2.65-5.45.03-.16.07-.41.1-.54.02-.13.05-.35.07-.48s.04-.34.05-.46c.02-.13.02-.52.02-1.01-.01-.91-.05-1.19-.27-2.09-.22-.9-.44-1.43-.94-2.33-.44-.77-1.03-1.69-1.3-2.03-.19-.24-.53-.67-.85-1.13-.06-.09-.32-.4-.56-.69-3.39-4.04-5.73-7.65-7.23-11.15-.1-.23-.32-.73-.5-1.11-.43-.93-.37-.92-.8-.03Z" />
            <g id="water">
                <path class="waterdrop"
                d="m392.77,432.79c-3.77-4.83-7.54-9.66-11.31-14.5l-1.6-2.05c-.83-1.07-2.66-.87-3.54,0-1.05,1.05-.83,2.47,0,3.54,3.77,4.83,7.54,9.66,11.31,14.5l1.6,2.05c.83,1.07,2.66.87,3.54,0,1.05-1.05.83-2.47,0-3.54h0Z" />
            <path class="waterdrop"
                d="m401.89,432.5c-.79-6.54-1.59-13.07-2.38-19.61-.11-.93-.23-1.86-.34-2.78-.16-1.34-1.03-2.5-2.5-2.5-1.22,0-2.66,1.15-2.5,2.5.79,6.54,1.59,13.07,2.38,19.61.11.93.23,1.86.34,2.78.16,1.34,1.03,2.5,2.5,2.5,1.22,0,2.66-1.15,2.5-2.5h0Z" />
            <path class="waterdrop"
                d="m428.79,436.45c3.66-4.69,7.31-9.37,10.97-14.06l1.55-1.99c.83-1.06,1.04-2.5,0-3.54-.86-.86-2.7-1.07-3.54,0-3.66,4.69-7.31,9.37-10.97,14.06l-1.55,1.99c-.83,1.06-1.04,2.5,0,3.54.86.86,2.7,1.07,3.54,0h0Z" />
            <path class="waterdrop"
                d="m421.04,432.19c.82-5.92,1.63-11.85,2.45-17.77.12-.84.23-1.68.35-2.52.18-1.34-.32-2.68-1.75-3.08-1.17-.32-2.89.4-3.08,1.75-.82,5.92-1.63,11.85-2.45,17.77-.12.84-.23,1.68-.35,2.52-.18,1.34.32,2.68,1.75,3.08,1.17.32,2.89-.4,3.08-1.75h0Z" />
            <path class="waterdrop" d="m412.68,431.09v-20.98c0-3.22-5-3.22-5,0v20.98c0,3.22,5,3.22,5,0h0Z" />
        </g>
            <g>
                <path class="cup"
                    d="m440.6,451.22c1.89.33,3.7.51,5.43.98,9.31,2.52,15.52,11.47,14.74,21.14-.78,9.61-8.43,17.45-18.04,18.38-2.05.2-4.31-.33-6.15.35-1.76.65-3.03,2.53-4.64,3.7-3.36,2.44-7.16,3.67-11.32,3.68-6.83.02-13.67.03-20.5,0-9.32-.03-17.33-6.34-19.52-15.44-.38-1.58-.58-3.25-.59-4.88-.05-10.62-.03-21.23-.03-31.85,0-2.61.83-3.46,3.42-3.46,17.91,0,35.83,0,53.74,0,2.63,0,3.46.83,3.46,3.41,0,1.34,0,2.68,0,3.99Zm.08,30.51c3.77-.17,6.67-1.73,8.52-4.89,2.13-3.62,2.03-7.34-.29-10.85-1.91-2.89-4.7-4.31-8.23-4.41v20.15Z" />
                <path class="cls-3"
                    d="m440.68,481.73v-20.15c3.54.1,6.32,1.53,8.23,4.41,2.32,3.51,2.42,7.23.29,10.85-1.86,3.16-4.76,4.72-8.52,4.89Z" />
            </g>
        </svg>  
                </div>
                    <p class="px-12 sm:px-16 lg:invisible lg:opacity-0 2xl:invisible 2xl:opacity-0 xl:invisible xl:opacity-0 min-[830px]:px-[200px] lg:absolute ">The final animation features a curious water cat. With its skillful paw, it pours a drop of water into a cup, thus revealing its fluid nature in harmony with the aquatic element that composes it.<br><br><b>GSAP Library Animation</b>
                    </p>                
            </div>
                <img src="../../../../public/img/right_two.png" class="absolute right-0  mt-[1100px] w-[50%] sm:w-[35%] lg:mt-[830px] lg:w-[20%] lg:h-[70%] -z-10 first-letter:" />
            </div>
        </div>
        <div>
        <img src="../../../../public/img/left_two.png" class="absolute left-0 z-30  lg:w-[40%] mt-10 sm:w-[55%] lg:h-[40%] lg:-mt-44" />
        </div>
        </div>
</template>

<style>
.waterdrop{
    opacity: 0;
}
.goutte {
    fill: #74ccf4;
    stroke-width: 0px;
}

.chat {
    fill: #32559E;
    stroke-width: 0px;
}

.cls-3 {
    fill: #fff;
    stroke-width: 0px;
}

.waterdrop {
    fill: #74ccf4;
    stroke-width: 0px;
}

.cup {
    fill: #323232;
    stroke-width: 0px;
}
.catwater {
    margin: auto;
    width: 288px;
    height: 288px;
    background: url("../../../../public/img/cat__water_water.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation: play 4s steps(28) infinite;
}
.catwatercolor {
    margin: auto;
    width: 288px;
    height: 288px;
    background: url("../../../../public/img/cat__water_color.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation: play2 4s steps(17) infinite;
}
#court {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden; 
    width: 288px;
    height: 288px;
    background: #eee;
    border: solid black 2px;
    margin: 5%;
}

@keyframes play {
    from {
        background-position: 0px;
    }

    to {
        background-position: -8064px;
    }
}

@keyframes play2 {
    from {
        background-position: 0px;
    }

    to {
        background-position: -4896px;
    }
}
#glace {
    position: absolute;
    left: 0;
    top: -200px;
    z-index: 10;
}

#conne {
    position: absolute;
    left: 0;
    top: 80px;
}
.glaceinter {
    fill: #fff;
    stroke: #231f20;
    stroke-miterlimit: 10;
    stroke-width: 3px;
}
.trait {
     fill: #ef4136;
     stroke-width: 0px;
                    }
 .traitinter{
    stroke-width: 0px;
    fill: #231f20;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Cat_conne from '@/components/icons/Cat_conne.vue';
import { gsap } from "gsap";
import { useHead } from '@unhead/vue'
useHead({
    title: 'Water Cats',
})
import { useFavicon } from '@vueuse/core'
const icon = useFavicon()
icon.value = '../../../../public/Vector.png'



const glace = ref(null);
const animateCombined = () => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to("#goutte", {
        y: "+=130",
        duration: 1.5,
    })
        .to("#goutte", {
            opacity: 0,
        })
        .to(".waterdrop", { opacity: 1, y: 0, duration: 0.2 })

        .to({}, 0.7, {})

        .set("#goutte", {
            y: "-=100",
            opacity: 1,
        });

    return tl;
}

onMounted(() => {
    animateCombined();
    if (!glace.value) return;

    let goingDown = true;
    let decreasingOpacity = false;

    setInterval(() => {
        const currentTop = parseInt(getComputedStyle(glace.value).top, 10);
        const currentOpacity = parseFloat(getComputedStyle(glace.value).opacity);

        if (goingDown && currentTop < 18) {
            glace.value.style.top = currentTop + 2 + "px";
        } else if (goingDown && currentTop >= 18) {
            decreasingOpacity = true;
        }

        if (decreasingOpacity) {
            if (currentOpacity > 0) {
                glace.value.style.opacity = currentOpacity - 0.02; 
            } else {
                glace.value.style.top = "-200px";
                glace.value.style.opacity = "1";
                decreasingOpacity = false;
                goingDown = true;
            }
        }
    }, 20);
});
</script>

   


