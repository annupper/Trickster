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

  showEditDetails = (id) => {
    return this.service.get(`/edit/${id}`)
    .then(response => response.data);
  }

  editNoteDetails = ( title, noteText, id) => {
    return this.service.post(`/edit`, {title: title, noteText: noteText, id:id})
    .then(response => response.data);
  }

  createNote = (title, noteText) => {
    return this.service.post('/note/createnote', {title: title, noteText: noteText})
    .then(response => response.data)
  }

  deleteNote = (noteId) => {
    return this.service.delete(`/note/${noteId}`)
    .then(response => response.data)
  }

}

export default NoteService;