function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(0);
    t1_xBase1 = 10;
    t1_xBase2 = 20;
    t1_yBase = 15;
    t1_xTop = (t1_xBase1+t1_xBase2)/2;
    t1_yTop = 5;

    t2_xBase1 = 5;
    t2_xBase2 = 15;
    t2_yBase = 25;
    t2_xTop = (t2_xBase1+t2_xBase2)/2;
    t2_yTop = 15;

    t3_xBase1 = 15;
    t3_xBase2 = 25;
    t3_yBase = 25;
    t3_xTop = (t3_xBase1+t3_xBase2)/2;
    t3_yTop = 15;
    
    for (let r = 0; r < 25; r++) {
      for (let i = 0; i < 40; i++) {
          fill(255, 255, 255);
          triangle(t1_xTop, t1_yTop, t1_xBase1, t1_yBase, t1_xBase2, t1_yBase);
          triangle(t2_xTop, t2_yTop, t2_xBase1, t2_yBase, t2_xBase2, t2_yBase);
          triangle(t3_xTop, t3_yTop, t3_xBase1, t3_yBase, t3_xBase2, t3_yBase);

          t1_xBase1 += 25;
          t1_xBase2 += 25;
          t1_xTop = (t1_xBase1 + t1_xBase2) / 2;

          t2_xBase1 += 25;
          t2_xBase2 += 25;
          t2_xTop = (t2_xBase1 + t2_xBase2) / 2;

          t3_xBase1 += 25;
          t3_xBase2 += 25;
          t3_xTop = (t3_xBase1 + t3_xBase2) / 2;
      }

      t1_xBase1 = 10;
      t1_xBase2 = 20;
      t1_xTop = (t1_xBase1 + t1_xBase2) / 2;

      t2_xBase1 = 5;
      t2_xBase2 = 15;
      t2_xTop = (t2_xBase1 + t2_xBase2) / 2;

      t3_xBase1 = 15;
      t3_xBase2 = 25;
      t3_xTop = (t3_xBase1 + t3_xBase2) / 2;

      t1_yBase += 40;
      t1_yTop += 40;

      t2_yBase += 40;
      t2_yTop += 40;

      t3_yBase += 40;
      t3_yTop += 40;
  }
}
