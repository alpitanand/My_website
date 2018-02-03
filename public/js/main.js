// var path =  new Path();
// path.strokeColor = 'red';
// path.add(new Point(40, 40), new Point(40,160),new Point(160,160),new Point(160,40));
// path.closed = true;
// path.smooth();

// var circle = new Path.Circle(new Point(160,160),80);
// circle.strokeColor = 'black';

// var rectangle = new Rectangle(new Point(240, 160), new Point(150, 100));
// var cornerSize = new Size(20, 20);
// var path = new Path.RoundRectangle(rectangle, cornerSize);``
// path.strokeColor = 'green';


// Create a symbol, which we will use to place instances of later:
// var path = new Path.Circle({
// 	center: [0, 0],
// 	radius: 10,
// 	fillColor: 'white',
// 	strokeColor: 'black'
// });

// var rect = new Path.Rectangle({
// 	segments:[[10,10],[150,100]],
// 	strokeColor:"red",

// })

// var path = new Path({
// 	segments:[[40, 115], [80, 180], [200, 20]],
// 	strokeColor:"blue",
// 	strokeCap : 'round',
// 	strokeJoin : 'round',
// 	strokeWidth:10
// })

// var path = new Path();
//  path.strokeColor = "red";

//  function onMouseDown(event){
// 	 path.add(event.point);
// 	 path.smooth();
//  }


// var path;

// function onMouseDown(event){
// 	path = new Path();
// 	path.strokeColor = 'red';
// 	path.add(event.point);
// }

// function onMouseUp(event){
// 	path.add(event.point);
// }

// function onMouseUp(event){
// 	var path = new Path();
// 	path.strokeColor = 'red';
// 	path.add(event.downPoint);
// 	path.add(event.point);
// }

// var path;
// function onMouseDown(event){
// 	path = new Path();
// 	path.add(event.point);
// }

// function onMouseDrag(event){
// 	path.add(event.point);
// 	path.strokeColor = 'red';
// }
// function onMouseUp(event) {
// 	var myCircle = new Path.Circle({
// 		center: event.point,
// 		radius: 10
// 	});
// 	myCircle.strokeColor = 'black';
// 	myCircle.fillColor = 'white';
// }

// function onMouseUp(event){
// 	var circle = new Path.Circle({
// 		center :  event.middlePoint,
// 		radius : event.delta.length/2
// 	});
// console.log(event.delta);
// circle.strokeColor =  'black';
// circle.fillColor = 'green';
// }

// tool.fixedDistance = 20;

// function onMouseDrag(event){
// 	var circle = new Path.Circle({
// 		center: event.middlePoint,
// 		radius: event.delta.length/2
// 	});
// 	circle.fillColor = 'black';
// }

// var path;

// function onMouseUp(event){
// 	path = new Path({
// 		strokeColor: "red"
// 	});
// 	path.add(event.downPoint);
// 	path.add(event.point);

// }

// tool.minDistance = 10;
// tool.maxDistance = 45;
// var path;
// var newpath;
// var newpath2;

// function onMouseDown(event){

// 	newpath = new Path({

// 	})
// 	newpath.add(event.point);

// 	newpath.fillColor = {
// 		hue: Math.random() * 360,
// 		saturation: 1,
// 		brightness: 1
// 	};
// newpath2 = new Path({
// 	strokeColor:'black',
// })
// newpath2.add(event.point);
// newpath2.selected = true;

// }
// function onMouseDrag(event){
// 	// path = new Path({
// 	// 	strokeColor : 'red'
// 	// });
// 	var vector = event.delta;
// 	vector.angle += 90;
// 	vector.length = event.delta.length;

// 	newpath.add(event.middlePoint+vector);
// 	newpath.insert(0,event.middlePoint-vector);
// 	newpath.smooth();


//newpath.add(event.point);
// newpath.add(event.middlePoint+vector);
// newpath2.add(event.middlePoint-vector);

// newpath.smooth();
// newpath2.smooth();
// }

// function onMouseUp(event){
// 	newpath.closed = true;
// 	newpath.smooth();
// }

// var path = new Path.Circle(new Point(100, 70),50);
// path.fillColor = 'red';

// var circle = new Path.Circle(new Point(150,70),50);
// circle.fillColor = 'blue';

// var circle2 = circle.clone();
// circle2.position = new Point(200,50);
// circle2.scale((0.5),1.5);

// // function onMouseMove(event){
// // 	circle2.position = event.point;
// // }

// circle.blendMode = 'multiply';

// var rect = new Path.Rectangle(new Point(400,75), new Size(100,50));
// rect.style={
// 	fillColor: 'green'
// }

// var copy = rect.clone();
// copy.rotate(45);
// copy.style={
// 	fillColor: 'white',
// 	strokeColor : 'black'
// }

// function onFrame(event){
// 	copy.rotate(.5);
// }

// for(var i =0;i<20;i++){
// 	var circle= new Path.Circle(new Point(100+(15*i),75),30);
// 	circle.style={
// 		strokeColor : 'black',
// 		fillColor: 'red'
// 	}
// }
// var children = project.activeLayer.children;

// // Iterate through the items contained within the array:
// for (var k = 0; k < children.length; k++) {
// 	var child = children[k];

// 	// Change the fill color of the child to a random
// 	// value between 0 and 360:
// 	child.fillColor.hue = Math.random() * 360;
// }

// var circle = new Path.Circle(new Point(150,70),25);
// circle.style={
// 	strokeColor : 'red',
// 	fillColor : 'red'
// }

// var symbol = new Symbol(circle);
// symbol.place(new Point(200,75));
// symbol.place(view.center)


// var path = new Path(new Point(100,75), new Point(100, 150))
// path.style={
// 	strokeColor : 'red',
// 	strokeCap : 'round',
// 	strokeWidth : '10'
// }

// var symbol = new Symbol(path);

// for (var i =0 ;i<100;i++){
// 	symbol.place(view.size*Point.random());
// }

// function onFrame(event){
// 	symbol.definition.rotate(1);
// 	symbol.definition.strokeColor.hue += 0.2;
// }

var count = 250;
var path = new Path.Circle(new Point(0, 0), 10);

path.style = {
	strokeColor: 'black',
	fillColor: 'white'
}
var symbol = new Symbol(path);

for (var i = 0; i < count; i++) {
	var postion = view.size * Point.random();
	var placedSymbol = symbol.place(postion);
	placedSymbol.scale(i / count);
}

var circle = new Path.Circle(new Point(0,0),25);
var layer =  project.activeLayer;

function onFrame(event) {
	for (var i = 0; i < count; i++) {
		var children = project.activeLayer.children[i];
		
		if (circle.contains(children.position)) {
			var pos = view.size * Point.random();
		
			//children.position.angle =  dis.angle;
			
				children.position = pos;
			
			
		}

		children.position.x += (children.bounds.width) / 20;
		if (children.position.x - (children.bounds.width) >= view.bounds.width) {
			children.position.x = -children.bounds.width;
		}
	}
}

function onMouseMove(event) {
	circle = new Path.Circle({
		center: event.middlePoint,
		radius: event.delta.length / 2
	});
}
