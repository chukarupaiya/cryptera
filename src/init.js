const handle = async() => {
    try {
      const docRef = await addDoc(collection(db, "event_details"),
        {
          id: '1',
          name: "code",
          eligibility: "all",
          completed: false,
          results: {
            gold: {
              name: "Naveenkumar M",
              dept: "CSE Thirs year",
              college: "SVNIT",

            },
            silver: {
              name: "Naveenkumar M",
              dept: "CSE Thirs year",
              college: "SVNIT",
            },
            bronze: {
              name: "Naveenkumar M",
              dept: "CSE Thirs year",
              college: "SVNIT",
            }

          },
          rules: [
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
          ],
          pics: {
            primary: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            secondary: [
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

            ]
          },
          title: 'Event 1',
          dateTime: "Jan 2nd,11.00 am",
          duration: "2 hours",
          allDay: true,
          prizes: {
            gold: '100',
            silver: '50',
            bronze: '20'
          },
          event_managers: [
            {
              id: '1',
              name: "Naveenkumar M",
              email: "naveenred97@gmail.com",
              phone: "9888888888",
              role: "Event Manager",
              year: "3rd year CSE",
              instagram: "https://www.instagram.com/naveenred97",
              github: "grrweg",
              portfolio: "https://www.github.com/naveenred97",
              linkedin: "https://www.linkedin.com/in/naveenred97",
            }
          ],
          color: 'orange',
          description: ". One application can be assigned multiple routes.",
          form: "https://google.com",
          type: "technical",
          faq: [
            {
              question: "What is the event?",
              answer: "A hisg lfewrgr eg erwgerg gwwegr gr gherhgr h r h rh  r h w g dgsdg ad  er bhf  h raercgg feuwycbtryi74 fgrvutfr tryuvtyuf gty uerwgf yu34"
            }
          ],
          speakers: [
            {
              name: "John Doe",
              image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              description: "A hisg lfewrgr eg erwgerg gwwegr gr gherhgr h r h rh  r h w g dgsdg ad  er bhf  h raercgg feuwycbtryi74 fgrvutfr tryuvtyuf gty uerwgf yu34"
            },
          ],
          tags: [
            'python', "coding"
          ]

        },
        {
          id: '1',
          name: "codex",
          eligibility: "all",
          completed: false,
          results: {
            gold: {
              name: "Naveenkumar M",
              dept: "CSE Thirs year",
              college: "SVNIT",

            },
            silver: {
              name: "Naveenkumar M",
              dept: "CSE Thirs year",
              college: "SVNIT",
            },
            bronze: {
              name: "Naveenkumar M",
              dept: "CSE Thirs year",
              college: "SVNIT",
            }

          },
          rules: [
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
            "Lorem ispdwfg gwger g rw g r g r gre",
          ],
          pics: {
            primary: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            secondary: [
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

            ]
          },
          title: 'Event 1',
          dateTime: "Jan 2nd,11.00 am",
          duration: "2 hours",
          allDay: true,
          prizes: {
            gold: '100',
            silver: '50',
            bronze: '20'
          },
          event_managers: [
            {
              id: '1',
              name: "Naveenkumar M",
              email: "naveenred97@gmail.com",
              phone: "9888888888",
              role: "Event Manager",
              year: "3rd year CSE",
              instagram: "https://www.instagram.com/naveenred97",
              github: "grrweg",
              portfolio: "https://www.github.com/naveenred97",
              linkedin: "https://www.linkedin.com/in/naveenred97",
            }
          ],
          color: '#00a65a',
          description: "Routes are meant to reach a Cloud native application hosted in Cloud platform like Cloud Foundry. Routes are created and assigned to a cloud foundry appl.",
          form: "https://google.com",
          type: "non_technical",
          faq: [
            {
              question: "What is the event?",
              answer: "A hisg lfewrgr eg erwgerg gwwegr gr gherhgr h r h rh  r h w g dgsdg ad  er bhf  h raercgg feuwycbtryi74 fgrvutfr tryuvtyuf gty uerwgf yu34"
            }
          ],
          speakers: [
            {
              name: "John Doe",
              image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              description: "A hisg lfewrgr eg erwgerg gwwegr gr gherhgr h r h rh  r h w g dgsdg ad  er bhf  h raercgg feuwycbtryi74 fgrvutfr tryuvtyuf gty uerwgf yu34"
            },
          ],
          tags: [
            'python', "codin"
          ]

        }
      );

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }