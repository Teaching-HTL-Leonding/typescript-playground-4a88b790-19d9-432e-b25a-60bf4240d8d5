function setup() {
    createCanvas(1000, 1000);
    background("aqua");

    scale(1,1);

    stroke("black");

    fill("darkgray");
    triangle(70, 175, 95, 175, 82, 215);
    triangle(120, 175, 145, 175, 132, 215);

    fill("gray");
    triangle(55, 175, 80, 175, 67, 215);
    triangle(105, 175, 130, 175, 117, 215);

    circle(95, 140, 110);

    fill("darkgray");
    circle(140, 100, 70);

    fill("gray");
    circle(165, 120, 70);

    stroke("gray");
    fill("gray");
    circle(188, 145, 18);
    circle(194, 160, 16);
    circle(198, 175, 14);
    circle(196, 190, 12);
    circle(188, 202, 10);
    circle(178, 208, 8);

    stroke("black");
    fill("white");
    triangle(188, 148, 208, 158, 188, 156);

    fill("black");
    circle(178, 108, 8);

    stroke("gray");
    line(42, 145, 27, 170);

    fill("gray");
    triangle(27, 170, 35, 166, 30, 180);
}