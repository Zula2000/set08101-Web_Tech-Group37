document.addEventListener("DOMContentLoaded", function () {
    const storyText = document.getElementById("story");
    const trailBtn = document.getElementById("trailBtn");
    const thicketBtn = document.getElementById("thicketBtn");

    trailBtn.addEventListener("click", function () {
        storyText.innerHTML = "You take the well-worn trail, hoping to find civilization. The trees thin out, but suddenly, you hear rustling behind you...";
        trailBtn.remove();
        thicketBtn.remove();
        
        const investigateBtn = document.createElement("button");
        investigateBtn.innerText = "Turn Around";
        investigateBtn.onclick = function () {
            storyText.innerHTML = "You turn around and spot glowing eyes watching from the bushes. Whatever it is... it's **not human**.";
            investigateBtn.remove();
        };
        document.body.appendChild(investigateBtn);
    });

    thicketBtn.addEventListener("click", function () {
        storyText.innerHTML = "You push into the tangled thicket, branches scratching at your arms. The thick foliage makes every step difficult... until you trip over something **metal** buried in the undergrowth.";
        trailBtn.remove();
        thicketBtn.remove();
        
        const examineBtn = document.createElement("button");
        examineBtn.innerText = "Examine the Object";
        examineBtn.onclick = function () {
            storyText.innerHTML = "You brush away dirt and leaves, revealing a **rusted sword**. Who left this here, and why?";
            examineBtn.remove();
        };
        document.body.appendChild(examineBtn);
    });
});