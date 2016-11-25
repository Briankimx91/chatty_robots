
function robot(robot_name){
	//console.log('robot constructing');
	this.name = robot_name;
	this.serial_number;
	this.kill_count = 0;
	this.print_message = function(message){
		var div = $("<div>");
		var name = $("<strong>").addClass('robot-name').text(this.name+':');
		var span = $("<span>").addClass('robot-message').text(message);
		div.append(name,span);
		$("body").append(div);
	}
	this.send_message = function(message, target_robot){
		this.print_message(message);
		if(target_robot !== undefined){
			this.send_communication_to_other_robot(target_robot, message);
		}
	}
	this.send_communication_to_other_robot = function(target_robot, message){
		target_robot.receive_communication(message, this);
	}
	this.receive_communication = function(message, sending_robot){
		this.print_message('message receveived from '+sending_robot.name+': '+message);

		if(message === 'send kill count'){
			console.log('kill count request made');
			this.send_message(this.get_kill_count(),sending_robot);
		}
		console.log('receiving message'); 	debugger;
	}
	this.get_kill_count = function(){
		return this.kill_count + ' miserable humans terminated';
	}
	this.terminate_human = function(){
		this.kill_count++;
	}
	//console.log('robot completed: '+this.name);
}

