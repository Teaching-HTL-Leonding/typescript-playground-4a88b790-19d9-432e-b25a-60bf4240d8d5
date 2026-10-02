function setup() {
    createCanvas(1000, 1000);
    background("aqua");

    scale(1,1);

    fill("gray");
    triangle(115, 160, 133, 160, 124, 205);
    triangle(135, 150, 151, 150, 143, 195);
    triangle(185, 160, 203, 160, 194, 205);
    triangle(205, 150, 221, 150, 213, 195);

    stroke("black");
    line(210, 100, 235, 125);
    line(235, 125, 230, 145);
    fill("gray");
    circle(230, 147, 12);

    fill("gray");
    circle(160, 120, 110);
    circle(85, 90, 85);

    fill("white");
    triangle(105, 55, 145, 85, 105, 120);

    fill("gray");
    circle(60, 112, 30);
    circle(55, 138, 26);
    circle(58, 164, 22);
    circle(68, 184, 18);
    circle(78, 194, 14);

    fill("white");
    circle(75, 75, 12);
    fill("black");
    circle(77, 75, 5);

    fill("white");
    triangle(78, 108, 110, 100, 82, 122);
}