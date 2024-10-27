describe("brukertest for login, log out og feilmelding", () => {
	const gyldigEpost = "testeren123@stud.noroff.no";
	const gyldigPassord = "OppgavePassord1";
	const ugyldigEpost = "feilbruker@stud.noroff.no";
	const ugyldigPassord = "feilpassord";

	beforeEach(() => {
		cy.visit("http://localhost:5500");
		cy.log("Starter ved å besøke startsiden");
	});

	it("skal logge inn med gyldige credentials", () => {
		cy.get("#registerForm").should("be.visible");
		cy.wait(1500); // Vent for å sikre at modalen er synlig

		// klikker på login knapp ved siden av "create profile"
		cy.get('[data-auth="login"]').last().click();

		// Sikrer at login-modal vises etter klikket
		cy.get("#loginForm").should("be.visible");
		cy.wait(1000); // Venter litt

		//populerer feltene med gyldig epost og passord
		cy.get("#loginEmail").type(gyldigEpost);
		cy.get("#loginPassword").type(gyldigPassord);

		//klikker på submit knapp
		cy.get("form#loginForm").find('button[type="submit"]').click();
		cy.wait(1500); // Vent etter innsending

		//  ser at vi er omdirigert til profilsiden
		cy.url().should("include", "/?view=profile");

		// sjekker at token og profile er lagret i local
		cy.window().then((win) => {
			const token = win.localStorage.getItem("token");
			const profil = win.localStorage.getItem("profile");
			expect(token).to.exist;
			expect(profil).to.exist;
		});

		cy.get('button[data-auth="logout"]').should("be.visible");
	});

	it("Skal vise feil for ugyldige innloggingsdetaljer", () => {
		cy.get("#registerForm").should("be.visible");
		cy.wait(1500);

		cy.get('[data-auth="login"]').last().click();
		cy.get("#loginForm").should("be.visible");
		cy.wait(1000);

		// Populerer med feil epost og passord
		cy.get("#loginEmail").type(ugyldigEpost);
		cy.get("#loginPassword").type(ugyldigPassord);

		// trykker på submit knapp for å forsøke innlogging
		cy.get("form#loginForm").find('button[type="submit"]').click();

		// sjekker at en popup vises ved feil info
		cy.on("window:alert", (alertText) => {
			expect(alertText).to.equal(
				"Either your username was not found or your password is incorrect",
			);
		});

		// sjekker at ingen token eller profil er lagret i local
		cy.window().then((win) => {
			const token = win.localStorage.getItem("token");
			const profil = win.localStorage.getItem("profile");
			expect(token).to.be.null;
			expect(profil).to.be.null;
		});
	});

	it("sjekker at log out knapp funker", () => {
		cy.get("#registerForm").should("be.visible");
		cy.wait(1500);

		// trykker på login knapp
		cy.get('[data-auth="login"]').last().click();
		cy.get("#loginForm").should("be.visible");
		cy.wait(1000);

		// Fyll ut med gyldig epost og passord
		cy.get("#loginEmail").type(gyldigEpost);
		cy.get("#loginPassword").type(gyldigPassord);

		// Klikk på submit-knappen for å logge inn
		cy.get("form#loginForm").find('button[type="submit"]').click();
		cy.wait(4321);

		// sjekker at bruker blir videresendt til profilside etter innlogging
		cy.url().should("include", "/?view=profile");

		// klikker på logout knapp etter vellykket innlogging
		cy.get('button[data-auth="logout"]').click();

		// sjekker at vi er logget ut
		cy.get('button[data-auth="login"]').should("be.visible");
		cy.wait(1000); // venter for å forsikre at utlogging er fullført
	});
});
