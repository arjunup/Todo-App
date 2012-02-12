			enyo.kind({
					name:"Todo",
					kind: enyo.Control,
					tag: "li",
					//style:"border-style: solid; border-color:blue; border-width: 1px; padding:1px;margin:4px;",
					classes: "ol-container-li",
					components: [
						{ tag: "p", name: "toDospan" },
						{ tag: "a", name: "edit", classes :"btn-info btn", onclick: "editToDo", content: "edit", style:" margin-left: 15px; padding: 5px;" },
						{ tag: "a", name: "deleteToDo", classes :"btn-info btn", onclick: "deleteToDo", content: "delete", style:" margin-left: 15px; padding: 5px;" }
					],
					create:function(){
						 this.inherited(arguments);
						 this.textChanged();
					},					
					textChanged: function() {
						 this.$.toDospan.setContent(this.toDospan);
						 //sessionStorage.setItem('firstName', this.toDospan);
					},
					
					editToDo: function(){
						var editAns= prompt('Enter the new value');
						if( editAns != null && editAns != "") {
							this.$.toDospan.setContent(editAns);
						}
					},
					
					deleteToDo: function(){
						/*this.$.toDospan.destroy();
						this.$.edit.destroy();
						this.$.deleteToDo.destroy();*/
						this.destroy();
					}
					
			});			
			
			
			enyo.kind({
					name:"toDoApp",
					kind: enyo.Control,
					tag:"div",
					//style: "border-style: solid; border-width: 2px; padding: 10px; margin: 10px; min-height: 50px",
					classes: "toDo",
					published: {
					    todoTitle: " ",
					    todoButton: " ",
					    todoList: " ",
					  },
					components:[
						//{tag: "p", name:"todoTitle" , content:'Simplest To Do List'},
						{tag: "a", name:"todoButton", classes :"btn-primary btn-large", style: "margin:0 auto; display:block; width:250px;", content: " Add a  Todo ", onclick: "addToDo"} ,
						{tag: "ol", name:"todoList", content:" ", classes: "ol-container"},
					],					
					todoclick: function(){
						var ans = prompt('What do you want to save?');
						this.textChanged(ans);
					},					
					nextToDoNumber: 1,
					addToDo: function(inSource, inEvent) {
						var ans = prompt('What do you want to save?');
						if( ans != null && ans != "" ) {			// Check for null string
						    this.createComponent({
						      kind: Todo,
						      container: this.$.todoList,
						      //toDospan: this.nextToDoNumber + ')' + '  ' + ans 
						      toDospan: ans
						    });
						    ++this.nextToDoNumber;
						    this.$.todoList.render();
						}
					}					
			});
