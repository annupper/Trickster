import axios from "axios";

class NoteService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/note",
      withCredentials: true
    })
  }

  showNotes = () => {
    return this.service.get('/notes')
    .then(response => response.data);
  }

  showNoteDetails = (id) => {
    return this.service.get(`/note/${id}`)
    .then(response => response.data);
  }

  createNote = (note) => {
    console.log(note);
    return this.service.post('/note/createnote', note)
    .then(response => response.data)
  }

}

export default NoteService;