var msg_submit = document.getElementById('msg_submit')
var who_u = document.getElementById('who_u')
var subject = document.getElementById('msg_subject')
var body = document.getElementById('msg_body')
var heading_div = document.getElementById('heading_div')

heading_div.scrollIntoView({behavior: "smooth"})

msg_submit.onclick = function(){
	who_value = who_u.value
	sub_value = subject.value
	body_value = body.value
	console.log(who_value)
	console.log(sub_value)
	console.log(body_value)
	window.open(`mailto:rainford.d.k@gmail.com?subject=${who_value}: ${sub_value}&body=${body_value}`)
}




var ppi_butt = document.getElementById('ppi_butt')
var ppi_div = document.getElementById('ppi_div')
var contact_div = document.getElementById('contact_div')
var tools_div = document.getElementById('tools_div')
var projects_div = document.getElementById('projects_div')

ppi_butt.onclick = function(){
	contact_div.style.display = 'none'
	tools_div.style.display = 'none'
	projects_div.style.display = 'none'
	ppi_div.style.display = 'block'
}




var chart_select = document.getElementById('chart_select')
var chart_label = document.getElementById('chart_label')
var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var c4 = document.getElementById('c4')
var c5 = document.getElementById('c5')
var c6 = document.getElementById('c6')
var c7 = document.getElementById('c7')
var c8 = document.getElementById('c8')
var c9 = document.getElementById('c9')

chart_select.addEventListener("change", function() {
	if (this.value == 'Epithelial to mesenchymal transition') {
		chart_label.style.display = 'block'
		c1.style.display = 'block'
		c2.style.display = 'none'
		c3.style.display = 'none'
		c4.style.display = 'none'
		c5.style.display = 'none'
		c6.style.display = 'none'
		c7.style.display = 'none'
		c8.style.display = 'none'
		c9.style.display = 'none'
	}
	if (this.value == 'Activating Invasion and Metastasis') {
		chart_label.style.display = 'block'
		c1.style.display = 'none'
		c2.style.display = 'block'
		c3.style.display = 'none'
		c4.style.display = 'none'
		c5.style.display = 'none'
		c6.style.display = 'none'
		c7.style.display = 'none'
		c8.style.display = 'none'
		c9.style.display = 'none'
	}
	if (this.value == 'Sustained Proliferative Signaling') {
		chart_label.style.display = 'block'
		c1.style.display = 'none'
		c2.style.display = 'none'
		c3.style.display = 'block'
		c4.style.display = 'none'
		c5.style.display = 'none'
		c6.style.display = 'none'
		c7.style.display = 'none'
		c8.style.display = 'none'
		c9.style.display = 'none'
	}
	if (this.value == 'Hippo-Merlin Signaling Dysregulation') {
		chart_label.style.display = 'block'
		c1.style.display = 'none'
		c2.style.display = 'none'
		c3.style.display = 'none'
		c4.style.display = 'block'
		c5.style.display = 'none'
		c6.style.display = 'none'
		c7.style.display = 'none'
		c8.style.display = 'none'
		c9.style.display = 'none'
	}
	if (this.value == 'Sphingolipid Metabolism') {
		chart_label.style.display = 'block'
		c1.style.display = 'none'
		c2.style.display = 'none'
		c3.style.display = 'none'
		c4.style.display = 'none'
		c5.style.display = 'block'
		c6.style.display = 'none'
		c7.style.display = 'none'
		c8.style.display = 'none'
		c9.style.display = 'none'
	}
	if (this.value == 'PI3K/AKT Signaling') {
		chart_label.style.display = 'block'
		c1.style.display = 'none'
		c2.style.display = 'none'
		c3.style.display = 'none'
		c4.style.display = 'none'
		c5.style.display = 'none'
		c6.style.display = 'block'
		c7.style.display = 'none'
		c8.style.display = 'none'
		c9.style.display = 'none'
	}
	if (this.value == 'Integrin Signaling') {
		chart_label.style.display = 'block'
		c1.style.display = 'none'
		c2.style.display = 'none'
		c3.style.display = 'none'
		c4.style.display = 'none'
		c5.style.display = 'none'
		c6.style.display = 'none'
		c7.style.display = 'block'
		c8.style.display = 'none'
		c9.style.display = 'none'
	}
	if (this.value == 'Chemokine Signaling') {
		chart_label.style.display = 'block'
		c1.style.display = 'none'
		c2.style.display = 'none'
		c3.style.display = 'none'
		c4.style.display = 'none'
		c5.style.display = 'none'
		c6.style.display = 'none'
		c7.style.display = 'none'
		c8.style.display = 'block'
		c9.style.display = 'none'
	}
	if (this.value == 'G Protein Signaling') {
		chart_label.style.display = 'block'
		c1.style.display = 'none'
		c2.style.display = 'none'
		c3.style.display = 'none'
		c4.style.display = 'none'
		c5.style.display = 'none'
		c6.style.display = 'none'
		c7.style.display = 'none'
		c8.style.display = 'none'
		c9.style.display = 'block'
	}
});




var home = document.getElementById('home')
var tools = document.getElementById('tools')
var projects = document.getElementById('projects')
var contact = document.getElementById('contact')

home.onclick = function(){
	ppi_div.style.display = 'none'
	heading_div.style.display = 'block'
	contact_div.style.display = 'block'
	tools_div.style.display = 'block'
	projects_div.style.display = 'block'
	heading_div.scrollIntoView({behavior: "smooth"})
}
contact.onclick = function(){
	ppi_div.style.display = 'none'
	heading_div.style.display = 'block'
	contact_div.style.display = 'block'
	tools_div.style.display = 'block'
	projects_div.style.display = 'block'
	contact_div.scrollIntoView({behavior: "smooth"})
}
tools.onclick = function(){
	ppi_div.style.display = 'none'
	heading_div.style.display = 'block'
	contact_div.style.display = 'block'
	tools_div.style.display = 'block'
	projects_div.style.display = 'block'
	tools_div.scrollIntoView({behavior: "smooth"})
}
projects.onclick = function(){
	ppi_div.style.display = 'none'
	heading_div.style.display = 'block'
	contact_div.style.display = 'block'
	tools_div.style.display = 'block'
	projects_div.style.display = 'block'
	projects_div.scrollIntoView({behavior: "smooth"})
}








