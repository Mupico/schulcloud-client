import {
	Checkbox,
	CheckboxGroup,
	Icon,
	Input,
	RadioGroup,
	Row,
	Select,
	File,
	Textarea,
	ReactSelect,
	Form
} from '../../core/helpers/form';
import {Link} from 'react-router';

import Table from '../../administration/components/table';
import AdminSectionTeachers from '../../administration/components/teachers';

class SetupFormTeachers extends AdminSectionTeachers {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Administration: <br />Lehrkräfte</h1>

				<p>Ihr Account wurde freigeschaltet und die Schule freigegeben.
					Sie können nun Lehrkräfte (Lehrer/innen, Betreuer, ...) anlegen.</p>

				<p><b>Tipp:</b> Sie können auch nach Abschluss der Registrierung
					jeder Zeit weitere Lehrkräfte hinzufügen.</p>

				<Form>
					<div className="row">
						<div className="col-md-12">
							<Table head={this.getTableHead()} body={this.getTableBody()} />
						</div>
					</div>
				</Form>

				<button type="submit" className="btn btn-success" onClick={this.openModal.bind(this, this.defaultRecord)}>
					Lehrkraft hinzufügen
				</button>

				{this.modalUI()}

				<hr />

				<p>Im <b>nächsten Schritt</b> können Sie Klassen anlegen.</p>

				<Link className="btn btn-secondary" to="/signup/classes/">Fortsetzen</Link>
			</div>
		);
	}

}

export default SetupFormTeachers;


