package api

import (
	model "github.com/Survereignty/spet-rest-api/private/core/api/models"
	"github.com/Survereignty/spet-rest-api/private/core/lig"

	"encoding/json"
	"net/http"
)

func (s *Api) Routers() {
	//s.router.HandleFunc("/", s.indexPage())

	//s.router.PathPrefix("/dist").Handler(http.FileServer(http.Dir("dist/static/")))
	// http.Handle("/static/", http.StripPrefix("/static", http.FileServer(http.Dir("./dist/"))))
	// s.router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))
	// s.router.PathPrefix("/").HandlerFunc(IndexHandler("templates/index.html"))

	s.router.HandleFunc("/groups", s.Groups()).Methods(http.MethodGet, http.MethodPost, http.MethodDelete, http.MethodOptions)
	s.router.HandleFunc("/groupsDel", s.GroupsDel()).Methods(http.MethodPost, http.MethodOptions)

	s.router.HandleFunc("/students", s.Students()).Methods(http.MethodGet, http.MethodPost, http.MethodDelete, http.MethodPut, http.MethodOptions)
	s.router.HandleFunc("/studentsGroup", s.StudentsGroup()).Methods(http.MethodPost, http.MethodOptions)
	s.router.HandleFunc("/studentsDel", s.StudentsDel()).Methods(http.MethodPost, http.MethodOptions)
}

func IndexHandler(entrypoint string) func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, entrypoint)
	}
	return http.HandlerFunc(fn)
}

func (s *Api) setHeaders(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func (s *Api) indexPage() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// t, _ := template.ParseFiles("./public/pages/index.html")
		// t.ExecuteTemplate(w, "index", nil)
		http.ServeFile(w, r, "./public/static/index.html")
	}
}

func (s *Api) StudentsGroup() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		s.setHeaders(&w)

		u := &model.Group{}
		json.NewDecoder(r.Body).Decode(u)

		if r.Method == http.MethodPost {
			um, err := s.store.Student().GetSelectGroup(u.Name)
			if err != nil {
				lig.Error("Route", err)
				s.error(w, r, http.StatusNotFound, err)
				return
			}
			s.respond(w, r, http.StatusOK, um)
		}
	}
}

func (s *Api) StudentsDel() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		s.setHeaders(&w)

		u := &model.Student{}
		json.NewDecoder(r.Body).Decode(u)

		if r.Method == http.MethodPost {
			// Удалить студента
			if err := s.store.Student().Delete(u); err != nil {
				lig.Error("Route", err)
				s.error(w, r, http.StatusUnprocessableEntity, err)
				return
			}
			s.respond(w, r, http.StatusOK, u)
		}
	}
}

func (s *Api) GroupsDel() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		s.setHeaders(&w)

		u := &model.Group{}
		json.NewDecoder(r.Body).Decode(u)

		if r.Method == http.MethodPost {
			if err := s.store.Group().Delete(u); err != nil {
				s.error(w, r, http.StatusUnprocessableEntity, err)
				return
			}
			s.respond(w, r, http.StatusOK, u)
		}
	}
}

func (s *Api) Students() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		s.setHeaders(&w)

		u := &model.Student{}
		json.NewDecoder(r.Body).Decode(u)

		if r.Method == http.MethodGet {
			// Получаем студентов
			um, err := s.store.Student().Get()
			if err != nil {
				lig.Error("Route", err)
				s.error(w, r, http.StatusNotFound, err)
				return
			}
			s.respond(w, r, http.StatusOK, um)
		} else if r.Method == http.MethodPost {
			// Создаем студента
			if err := s.store.Student().Create(u); err != nil {
				lig.Error("Route", err)
				s.error(w, r, http.StatusUnprocessableEntity, err)
				return
			}
			s.respond(w, r, http.StatusCreated, u)
		} else if r.Method == http.MethodDelete {
			// Удалить студента
			if err := s.store.Student().Delete(u); err != nil {
				lig.Error("Route", err)
				s.error(w, r, http.StatusUnprocessableEntity, err)
				return
			}
			s.respond(w, r, http.StatusOK, u)
		} else if r.Method == http.MethodPut {
			// Изменить студента
			if err := s.store.Student().Update(u); err != nil {
				lig.Error("Route", err)
				s.error(w, r, http.StatusUnprocessableEntity, err)
				return
			}
			s.respond(w, r, http.StatusOK, u)
		}
	}
}

func (s *Api) Groups() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		s.setHeaders(&w)

		u := &model.Group{}
		json.NewDecoder(r.Body).Decode(u)

		// Если метод "Get" то:
		if r.Method == http.MethodGet {
			gs, err := s.store.Group().Get()
			if err != nil {
				s.error(w, r, http.StatusNotFound, err)
				return
			}
			s.respond(w, r, http.StatusOK, gs)
			// Если метод "Post" то:
		} else if r.Method == http.MethodPost {
			if err := s.store.Group().Create(u); err != nil {
				s.error(w, r, http.StatusUnprocessableEntity, err)
				return
			}
			s.respond(w, r, http.StatusCreated, u)
			// Если метод "Delete" то:
		} else if r.Method == http.MethodDelete {
			if err := s.store.Group().Delete(u); err != nil {
				s.error(w, r, http.StatusUnprocessableEntity, err)
				return
			}
			s.respond(w, r, http.StatusOK, u)
		}
	}
}

func (s *Api) error(w http.ResponseWriter, r *http.Request, code int, err error) {
	s.respond(w, r, code, map[string]string{"error": err.Error()})
}

func (s *Api) respond(w http.ResponseWriter, r *http.Request, code int, data interface{}) {
	w.WriteHeader(code)
	if data != nil {
		json.NewEncoder(w).Encode(data)
	}
}
