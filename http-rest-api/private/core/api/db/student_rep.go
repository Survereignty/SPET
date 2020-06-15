package db

import (
	model "github.com/Survereignty/spet-rest-api/private/core/api/models"
)

type StudentRep struct {
	store *Store
}

// Создать студента
func (r *StudentRep) Create(m *model.Student) error {
	if err := r.store.db.QueryRow(
		"INSERT INTO students (surname, middleName, name, date_b, city, street, house, flat, info, numGroup, activs, gender, status, orphan, invalid, low_income, low_parents, idn, kdn, many_children, login, password, budget) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING id",
		m.Surname, m.MiddleName, m.Name, m.Date_b, m.City, m.Street, m.House,
		m.Flat, m.Info, m.NumGroup, m.Activs, m.Gender, m.Status, m.Orphan, m.Invalid,
		m.Low_income, m.Low_parents, m.Idn, m.Kdn, m.Many_children, m.Login, m.Password, m.Budget,
	).Scan(&m.Id); err != nil {
		return err
	}

	return nil
}

// Изменить студента
func (r *StudentRep) Update(m *model.Student) error {
	_, err := r.store.db.Exec("UPDATE students SET surname = $2, middleName = $3, name = $4, date_b = $5, city = $6, street = $7, house = $8, flat = $9, info = $10, numGroup = $11, activs = $12, gender = $13, status = $14, orphan = $15, invalid = $16, low_income = $17, low_parents = $18, idn = $19, kdn = $20, many_children = $21, login = $22, password = $23, budget = $24 WHERE id = $1",
		m.Id, m.Surname, m.MiddleName, m.Name, m.Date_b, m.City, m.Street, m.House,
		m.Flat, m.Info, m.NumGroup, m.Activs, m.Gender, m.Status, m.Orphan, m.Invalid,
		m.Low_income, m.Low_parents, m.Idn, m.Kdn, m.Many_children, m.Login, m.Password, m.Budget)
	if err != nil {
		return err
	}
	return nil
}

// Удалить
func (r *StudentRep) Delete(m *model.Student) error {
	_, err := r.store.db.Exec(
		"DELETE from students where id = $1",
		m.Id,
	)
	if err != nil {
		return err
	}

	return nil
}

func (r *StudentRep) GetSelectGroup(name string) ([]*model.Student, error) {

	rows, err := r.store.db.Query("SELECT id, surname, name, middleName, numGroup, login FROM students WHERE numGroup = $1",
		name)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	sts := make([]*model.Student, 0)
	for rows.Next() {
		st := new(model.Student)
		err := rows.Scan(&st.Id, &st.Surname, &st.MiddleName, &st.Name, &st.NumGroup, &st.Login)
		if err != nil {
			return nil, err
		}
		sts = append(sts, st)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}

	return sts, nil
}

// Получить всех студентов
func (r *StudentRep) Get() ([]*model.Student, error) {

	query := "SELECT * FROM students"

	rows, err := r.store.db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	sts := make([]*model.Student, 0)
	for rows.Next() {
		st := new(model.Student)
		err := rows.Scan(&st.Id, &st.Surname, &st.MiddleName, &st.Name, &st.Date_b, &st.City, &st.Street, &st.House,
			&st.Flat, &st.Info, &st.NumGroup, &st.Activs, &st.Gender, &st.Status, &st.Orphan, &st.Invalid,
			&st.Low_income, &st.Low_parents, &st.Idn, &st.Kdn, &st.Many_children, &st.Login, &st.Password, &st.Budget)
		if err != nil {
			return nil, err
		}
		sts = append(sts, st)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}

	return sts, nil
}
