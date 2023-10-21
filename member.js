function skillsMember(){
    var skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'];
    var skillsList = document.getElementById('skills-list');
    var skillsListItems = skillsList.getElementsByTagName('li');
    for (var i = 0; i < skillsListItems.length; i++) {
        skillsListItems[i].innerHTML = skills[i];
    }
}