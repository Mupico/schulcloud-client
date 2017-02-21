import ReactPlayer from 'react-player';
require('../styles/search.scss');

class SectionSearch extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			query: (this.props.location.query || {}).q || ''
		}
	}

	getData() {
		const query = this.state.query;
		if (query == 'Biene' || query == 'Bienen' || query == 'biene' || query == 'bienen') {
			return [
				{
					id: 1,
					title: "Phase III - 149: Vernetzte Bienen, Fahrradlobbyisten und Spielausgrabungen",
					type: "Online-Video",
					duration: "15 min",
					createdAt: "2015",
					description: "Vernetzte Bienen - Bienen gehören zu den ältesten Nutztieren der Menscheit und können untereinander komplexe Informationen austauschen.",
					url: "https://www.youtube.com/watch?v=lAqvEVmMs1Q",
					image: "https://vebu.de/wp-content/uploads/2015/12/beitragsbild_690x460_bienen_industriell-690x460.jpg",
					source: "bildungsmedien.net"
				}, {
					id: 2,
					title: "Preetz - eine Stadt mit Herz für Bienen (HD)",
					type: "Text",
					duration: "ca. 10 min",
					createdAt: "2016",
					description: "Moderatorin Vèrena Püschel ist heute auf Spurensuche in Preetz unterwegs, in der offiziell 'bienenfreundlichsten Stadt' in Schleswig-Holstein.",
					url: "",
					image: "https://www.hauenstein-rafz.ch/de-wAssets/img/pflanzenwelt/sammelsurium/bienenweidepflanzen/Biene_12.jpg",
					source: "bildungsmedien.net"
				}, {
					id: 3,
					title: "Warum brauchen wir Bienen?",
					type: "Text",
					duration: "15 min",
					createdAt: "2014",
					description: "Kaum ein Tier wird so geschätzt wie die Biene: Arbeit, Ordnungssinn und perfekte Zusammenarbeit kennzeichnen ihr Leben.",
					url: "",
					image: "https://c1.staticflickr.com/5/4001/4629255847_5881bcdb1c_b.jpg",
					source: "bildungsmedien.net"
				}, {
					id: 4,
					title: "Bienen, gefährdete Gedächtniskünstler",
					type: "Text",
					duration: "24 min",
					createdAt: "2016",
					description: "Regina Oehler im Gespräch mit dem Neurobiologen Professor Randolf Menzel",
					url: "https://xplay.datenbank-bildungsmedien.net/7843cde14dfe65359d7e6fcf5a7552f6/sf-57614/hr2-Bienen-gefaehrdete_Gedaechtniskuenstler.mp3",
					image: "http://www.deutschland-summt.de/files/bilder_ds/content/bienenmenu/bienenfreundlich_gaertnern/bienen%20und%20blumen/Colletes%20sp_Hans%20Juergen%20Sessner.jpg",
					source: "bildungsmedien.net"
				}, {
					id: 5,
					title: "Bienenfresser - Steckbrief",
					type: "Online-Dokument",
					createdAt: "2016",
					description: "Der Link führt zum Online-Steckbrief des im Titel genannten Tiers. Der Steckbrief ist auch für Kinder verständlich.",
					url: "https://hamburg.edupool.de/home?pid=fm2iu327bmtap88sih97f0ep96",
					image: "https://origin.img.fotocommunity.com/anflug-bienenfresser-cef0d19f-51f7-4420-ab7b-0f2777ecb934.jpg?width=1000",
					source: "hamburg.edupool.de"
				}, {
					id: 6,
					title: "Bienen und Schadstoffe - Gemeinschaft puffert Wirkung von Schadstoffen",
					type: "Online-Audio",
					duration: "4 min",
					createdAt: "2014",
					description: "Die Wirkung von Pflanzenschutzmitteln und anderen Schadstoffen auf Bienen zu untersuchen ist schwierig.",
					url: "https://xplay.datenbank-bildungsmedien.net/6e04ff75f35694fb2a37e959711c55c8/shpool-44026/DLF-Bienen_und_Schadstoffe-Gemeinschaft_puffert_Wirkung_von_Schadstoffen.mp3",
					image: "https://www.regenwald.org/uploads/photos/article/wide/l/biene-blume-gelb.jpg",
					source: "bildungsmedien.net"
				}, {
					id: 7,
					title: "Heftklammern; Hostien; Honig; Hochseilartisten",
					type: "Didaktisches Medium",
					duration: "30 min",
					createdAt: "2010",
					description: "HEFTKLAMMERN: Drahtstückchen, gewalzt, geschnitten, gebogen und geleimt, das sind die Heftklammern, mit denen man im Büro – oder sonstwo – mehrere Seiten Papier zusammenheften kann.",
					url: "https://hamburg.edupool.de/home?pid=fm2iu327bmtap88sih97f0ep96",
					image: "http://www.agrarheute.com/sites/default/files/styles/ah_teaser_galerie_640x480/public/media/537350/537350_0.jpg",
					source: "hamburg.edupool.net"
				}, {
					id: 8,
					title: "Die Bienenretter",
					type: "Text",
					duration: "30 min",
					createdAt: "2015",
					description: "Äpfel, Erdbeeren, Gurken, Honig: Etwa ein Drittel unserer Nahrung hängt von Pflanzen ab, die von Bienen bestäubt werden.",
					url: "https://xplay.datenbank-bildungsmedien.net/9a4e47f197de501a833a690c777bbc24/ndr-51691-p/NDR-Die_Bienenretter-HD.mp4?play",
					image: "http://www.welovefamily.at/wp-content/uploads/2016/05/lukas-bienenretter-696x464.jpg",
					source: "bildungsmedien.net"
				}
			];
		} else if (query == 'Integral' || query == 'integral' || query == 'Integralrechnung' || query == 'integralrechnung') {
			return [
				{
					id: 1,
					title: "Bettermarks - Integralrechnung",
					type: "Text",
					duration: "",
					createdAt: "2015",
					description: "Mit der Integralrechnung kann man Flächen zwischen Graphen berechnen.",
					url: "http://de.bettermarks.com/mathe-glossar/integralrechnung.html",
					image: "https://www.wissensschule.de/wp-content/uploads/2012/02/logo-bettermarks.jpg",
					source: "bettermarks.com"
				}, {
					id: 2,
					title: "Integralrechnung mit GeoGebra",
					type: "Text",
					duration: "ca. 10 min",
					createdAt: "2016",
					description: "Eine anwendungsorientierte Einführung der Integralrechnung mit GeoGebra (Jahrgangsstufe 12).",
					url: "https://www.lehrer-online.de/unterricht/sekundarstufen/naturwissenschaften/mathematik/unterrichtseinheit/ue/einfuehrung-in-die-integralrechnung-mit-geogebra/",
					image: "https://static.geogebra.org/images/geogebra-logo-name.svg",
					source: "geogebra.org"
				}, {
					id: 3,
					title: "Serlo - Integralrechnung",
					type: "Text",
					duration: "",
					createdAt: "2014",
					description: "Das Integral ist ein Oberbegriff für das bestimmtes und unbestimmtes Integral. Ein bestimmtes Integral liefert einen Zahlenwert, während ein unbestimmtes Integral eine Funktion liefert.",
					url: "https://de.serlo.org/mathe/funktionen/stammfunktion-integral-flaechenberechnung/integrale/integral",
					image: "https://www.mebis.bayern.de/wp-content/uploads/sites/2/2015/05/Serlo-Logo-wp-600x338.jpg",
					source: "serlo.org"
				}
			];
		} else if (query == 'Bachelor' || query == 'bachelor') {
			return [
				{
					id: 1,
					title: "HPI - Bachelorpodium 2016",
					type: "Online-Video",
					duration: "ca. 4 min",
					createdAt: "2016",
					description: "Beim diesjährigen Bachelorpodium präsentierten angehende Absolventen des Hasso-Plattner-Instituts 14 innovative Softwarelösungen, die sie in Studententeams am Ende ihres Bachelorstudiums entwickelt haben.",
					url: "http://www10-fms.hpi.uni-potsdam.de/vod/media/HPI/HPI-TV/HD_bachelorpodium_2016.mp4",
					image: "",
					source: "hpi.de"
				}];
		} else if (query == 'css' || query == 'CSS') {
			return [
				{
					id: 1,
					title: "CSS - Aufbau",
					type: "Online-Video",
					duration: "ca. 10 min",
					createdAt: "2016",
					description: "",
					url: "https://player.vimeo.com/external/171390780.hd.mp4?s=43af5932ba7fccaabbcdd141fd45ba8e26ee30c2&profile_id=174&oauth2_token_id=60919992",
					image: "",
					source: "openhpi.de",
					download: "https://open.hpi.de/files/afacdce2-9a57-4df6-b007-30ba4d0a3422"
				},
				{
					id: 2,
					title: "CSS - Einführung",
					type: "Online-Video",
					duration: "ca. 10 min",
					createdAt: "2016",
					description: "",
					url: "https://player.vimeo.com/external/172109517.hd.mp4?s=1ad4c02c397ba8041ef34f38368d122677cdecb2&profile_id=174&oauth2_token_id=60919992",
					image: "",
					source: "openhpi.de",
					download: "https://open.hpi.de/files/df7144e9-43b7-42e6-b639-555272eeb5b0"
				},
				{
					id: 3,
					title: "CSS - Fortsetzung",
					type: "Online-Video",
					duration: "ca. 10 min",
					createdAt: "2016",
					description: "",
					url: "https://player.vimeo.com/external/172398981.hd.mp4?s=b60bbf3a6d5b84077e3594cc47ccc4985074da27&profile_id=174&oauth2_token_id=60919992",
					image: "",
					source: "openhpi.de",
					download: "https://open.hpi.de/files/919e129c-b9f6-4233-b3de-0e8c75239943"
				}];
		}
	}

	setQuery(event) {
		this.setState({query: event.target.value});
	}

	getSearchFieldUI() {
		return (
			<div className="search-wrapper">
				<div className="input-group input-group-lg">
					<input value={this.state.query} type="text" className="form-control search-field" placeholder="Suche nach..." onChange={this.setQuery.bind(this)}/>
				</div>
			</div>
		);
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.location.query.q !== this.state.query) {
			this.setState({ query: nextProps.location.query.q });
		}
	}

	getResultsUI() {
		const query = this.state.query;
		if (query != 'Biene' && query != 'Bienen' && query != 'biene' && query != 'bienen' && query != 'Integral' && query != 'integral' && query != 'Integralrechnung' && query != 'integralrechnung' && query != 'bachelor' && query != 'Bachelor' && query != 'css' && query != 'CSS') {
			return (
				<div className="row">
					<div className="col-sm-12 no-padding">
						<p className="text-muted text-center">
							<span>Keine Suchergebnisse.</span>
						</p>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<div className="row">
						<div className="col-sm-12 no-padding">
							<h5>Suchergebnisse für "{this.state.query}":</h5>
						</div>
					</div>
					<div className="row">
						<div className="row results">
							{this.getData.bind(this)().map((result) => {
								return (
									<div className="col-sm-4" key={result.id}>
										<div className="card">
											{result.type == "Online-Video" ? <ReactPlayer url={result.url} className="card-img-top" youtubeConfig={{preload:true}} playing={false} controls={true} /> : <img className="card-img-top" src={result.image} alt="Card image cap"/> }
											<div className="card-block">
												<h4 className="card-title">{result.title}</h4>
												<p className="card-text">{result.description}</p>
												{ (result.download) ?
												<button type="button" className="btn btn-secondary">
													<a href={ result.download } target="_blank">Slides</a>
												</button> : '' }
												<p>
													<small className="text-muted"> via {result.source} | 17. November 2016</small>
											</p>
												</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			);

		}
	}

	getFiltersUI() {
		return (
			<div>
				<div className="row">
					<div className="col-sm-12 no-padding">
						<div className="card filters-attributes">
							<div className="card-block">
								<div className="container-fluid">
									<div className="row">
										<div className="col-sm-3">
											<div className="btn-group">
												<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<strong>Fachbereich</strong>
												</button>
												<div className="dropdown-menu dropdown-menu-right">
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															<span>Biologie</span>
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															Mathe
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															Deutsch
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="btn-group">
												<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<strong>Klassenstufe</strong>
												</button>
												<div className="dropdown-menu dropdown-menu-right">
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															7.
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															8.
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															9.
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="btn-group">
												<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<strong>Lizenz</strong>
												</button>
												<div className="dropdown-menu dropdown-menu-right">
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															Frei
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															GNU General Public License
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															Creative Commons
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="col-sm-3">
											<div className="btn-group">
												<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<strong>Editierbar</strong>
												</button>
												<div className="dropdown-menu dropdown-menu-right">
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															Ja
														</label>
													</div>
													<div className="form-check">
														<label className="form-check-label">
															<input className="form-check-input" type="checkbox" value=""/>
															Nein
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 no-padding">
						<div className="btn-toolbar filters-type">
							<div className="btn-group">
								<button type="button" className="btn btn-secondary">Alle</button>
								<button type="button" className="btn btn-secondary">Dokumente (20)</button>
								<button type="button" className="btn btn-secondary">Videos (15)</button>
								<button type="button" className="btn btn-secondary">Literatur (10)</button>
								<button type="button" className="btn btn-secondary">Web</button>
								<button type="button" className="btn btn-secondary">Apps</button>
							</div>

							<div className="pull-right" role="group">
								<select className="custom-select">
									<option selected value="relevance">Relevanz</option>
									<option value="date">Datum</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<section className="section-search">
				<div className="container-fluid">
					<div className="row search-bar">
						<div className="row">
							<div className="col-sm-12">
								{this.getSearchFieldUI.bind(this)()}
							</div>
						</div>
					</div>
					<div className="filters">
						{this.getFiltersUI.bind(this)()}
					</div>
					<div className="search-results">
						{this.getResultsUI.bind(this)()}
					</div>
				</div>
			</section>
		);
	}

}

export default SectionSearch;
