function Allgrounds(){
  //Creating Ground....
  createGround(40);
  createGround(118);
  createGround(196);
  createGround(274);
  createGround(352);
  createGround(430);
  createGround(508);
  createGround(586);
  createGround(664);
  createGround(742);
  createGround(820);
  createGround(898);
  createGround(976);
  createGround(1054);
  createGround(1132);
  createGround(1210);
  createGround(1288);
  createGround(1366);
  createGround(1444);
  createGround(1522);
  createGround(1600);
  createGround(1678);
  createGround(1756);
  createGround(1834);
  createGround(1912);
  createGround(1990);
  createGround(2068);
  createGround(2068+78);
  createGround(2068+78*2);
  createGround(2068+78*3);
  createGround(2068+78*4);
  createGround(2068+78*5);
  createGround(2068+78*6);
  createGround(2068+78*7);
  createGround(2068+78*8);
  createGround(2068+78*9);

}

function createEnemy1(x,y){
  enemy = createSprite(x,y,50,50);
  enemy.addImage(enemy_img);
  enemy.depth = lep.depth-1;
  enemy.lifetime = 400;
  EnemyGroup.add(enemy);
  enemy.setCollider("rectangle",0,0,50,50)
  
 if(EnemyGroup.isTouching(lep)){
       gameState=end;
       EnemyGroup.setVelocityXEach(0);
      

  }
}

function AllBlocks(){
  createStein(1800,468);
  createStein(1832,468);
  createStein(1864,468);
  createStein(1896,468);
  //2Row
  createStein(1832,436);
  createStein(1864,436);
  createStein(1864,406);
  createStein(1896,436);
  createStein(1896,406);

  //After Distance....
  createStein(2925,468);
  createStein(2925+32,468);
  createStein(2925+32*2,468);
  createStein(2925+32*3,468);
  //2nd Row....
  createStein(2925+32*3,436);
  createStein(2925+32**3,436);
  createStein(2925+32*2,406);
  createStein(2925+32*2,436);
  createStein(2925,406);



}

function Defence1(x,y){
Defence = createSprite(x,y);
Defence.addImage(D1);
}

function AllDefence(){
  Defence1(1930,468);
  Defence1(1970,468);
  Defence1(1970+40,468);
  Defence1(1970+40*2,468);
  Defence1(1970+40*3,468);
  Defence1(1970+40*4,468);
  Defence1(1970+40*5,468);
  Defence1(1970+40*6,468);
  Defence1(1970+40*7,468);
  Defence1(1970+40*8,468);
  Defence1(1970+40*9,468);
  Defence1(1970+40*10,468);
  Defence1(1970+40*11,468);
  Defence1(1970+40*12,468);
  Defence1(1970+40*13,468);
  Defence1(1970+40*14,468);
  Defence1(1970+40*15,468);
  Defence1(1970+40*16,468);
  Defence1(1970+40*17,468);
  Defence1(1970+40*18,468);
  Defence1(1970+40*19,468);
  Defence1(1970+40*20,468);
  Defence1(1970+40*21,468);
  Defence1(1970+40*22,468);
  Defence1(1970+40*23,468);


}
function LongBlock(x,y){
  Lblock = createSprite(x,y);
  Lblock.addImage(Lblock_img)
  Lblock.scale = 0.8
}
function AllLblocks(){
  LongBlock(2050,350);
  LongBlock(2050+350,350);
  LongBlock(2050+350*2,350);
}

function createBullet(){
  bullet = createSprite(lep.x,lep.y+30,50,50);
  bullet.addImage(Bullet_img);
  bullet.scale = 0.8;
  bullet.velocityX = 8;
}
