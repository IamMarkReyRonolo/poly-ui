import axios from "axios";
const url = "https://poly-server.herokuapp.com/api/lessons";
axios.defaults.headers.common["auth-token"] =
	"Bearer " + localStorage.getItem("token");

export default class API {
	async getAllLessons() {
		axios.defaults.headers.common["auth-token"] =
			"Bearer " + localStorage.getItem("token");
		const lessons = await axios.get(url + "/all");
		return lessons;
	}

	async updateChapter(lessonid, chapnum, updatedChapter) {
		const chapter = await axios.patch(
			url + "/" + lessonid + "/" + chapnum,
			updatedChapter
		);
		return chapter;
	}

	async updateLesson(lessonid, updatedLesson) {
		const chapter = await axios.patch(url + "/" + lessonid, updatedLesson);
		return chapter;
	}

	async advanceupdate(updatedLesson) {
		console.log(updatedLesson);
		const chapter = await axios.patch(
			url + "/update/lessons/advance",
			updatedLesson
		);
		return chapter;
	}

	async averageupdate(updatedLesson) {
		console.log(updatedLesson);
		const chapter = await axios.patch(
			url + "/update/lessons/average",
			updatedLesson
		);
		return chapter;
	}
}
