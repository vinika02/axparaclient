<template>
    <div class="bg-gray ">
        <div class="container-fluid start">
            <div class="component-search">
                <input class="form-control i    nput-skill-scanner-keyword search-icon" type="text"
                    placeholder="Search keywords or select skills">
                <div class="filter1">
                    <button type="button" class="btn btn-filer  btn-custom-blue">
                        <img src="@/assets/images/mytalents/persona2/Vector.png" class="filter-imgg me-2">Filter
                    </button>
                </div>
                <div class="form-check1 ms-3">
                    <div class="sgd me-2">SGD</div>
                    <div class="form-check form-switch">
                        <input class="form-check-input usd-checkbox" type="checkbox" role="switch"
                            id="flexSwitchCheckChecked" checked>
                    </div>
                    <div class="usd">USD</div>
                </div>
            </div>

            <div>
                <table class="table data">
                    <thead>
                        <tr>
                            <th style="width: 152px;">
                                Talent ID/Name <img src="@/assets/images/mytalents/persona2/Sort.png" alt="">
                            </th>
                            <th style="width: 338px;">
                                Skills
                            </th>
                            <th style="width: 114px;">
                                Monthly Rate <img src="@/assets/images/mytalents/persona2/Sort.png" alt="">
                            </th>
                            <th style="width: 116px;">
                                Country <img src="@/assets/images/mytalents/persona2/Sort.png" alt="">
                            </th>
                            <th style="width: 146px;">
                                CV / Intro Video
                            </th>
                            <th style="width: 494px;">
                                Schedule Interview
                            </th>
                        
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="talent in talents" :key="talent.id">
                            <td>{{ (talent.talentID) }}</td>
                            <td class=" ">
                                <div class="skills-badge-content">
                                    <span class="badge tag-pink">
                                        {{ (talent.skills1) }}
                                    </span>
                                    <span class="badge tag-violet">
                                        {{ (talent.skills2) }}
                                    </span>
                                    <span class="badge tag-violet">
                                        {{ (talent.skills3) }}
                                    </span>
                                </div>


                            </td>
                            <td>{{ (talent.rate) }}</td>
                            <td>{{ (talent.country) }}</td>
                            <td><img v-bind:src="cv"></td>
                            <td class="btnGroup">
                                <button class="butt button-sced btn btn-outline-blue buttonSchedule" data-bs-toggle="modal"
                                    data-bs-target="#editScheModal">{{ (talent.schedule) }} </button>
                                <button class="button-sced btn btn-outline-blue buttonSchedule" data-bs-toggle="modal"
                                    data-bs-target="#editScheModal">{{ (talent.schedule) }} </button>
                                <button class="button-sced btn btn-outline-blue buttonSchedule" data-bs-toggle="modal"
                                    data-bs-target="#editScheModal">{{ (talent.schedule) }} </button>
                                    {{ (talent.more) }}
                            </td>                          
                        </tr>
                    </tbody>
                </table>
                <div>
                    <nav class="mt-3" aria-label="Page navigation">
                        <ul class="pagination custom-pagination justify-content-end">
                            <li class="page-item" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <a class="page-link  border-0" href="#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#8C8C8C"/>
                                            <path d="M14.41 1.41L13 0L7 6L13 12L14.41 10.59L9.83 6L14.41 1.41Z" fill="#8C8C8C"/>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="page-item" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <a class="page-link border-0" href="#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#8C8C8C"/>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="page-item "><a class="page-link active" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal">2</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal">3</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal">4</a></li>
                            <li class="page-item"><a class="page-link" href="#" data-bs-toggle="modal" data-bs-target="#LoginModal">5</a></li>
                            <li class="page-item" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <a class="page-link border-0" href="#" aria-label="Next">
                                    <span aria-hidden="true">
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M2.00009 0L0.590088 1.41L5.17009 6L0.590088 10.59L2.00009 12L8.00009 6L2.00009 0Z" fill="#8C8C8C"/>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li class="page-item" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <a class="page-link border-0" href="#" aria-label="Next">
                                    <span aria-hidden="true">
                                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z" fill="#8C8C8C"/>
                                            <path d="M7.41 0L6 1.41L10.58 6L6 10.59L7.41 12L13.41 6L7.41 0Z" fill="#8C8C8C"/>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'CandidateDB',
    data() {
        return {
            talents: [
                {
                    talentID: 'KR-02052',
                    skills1: 'CopyWrinting',
                    skills2: 'React JS',
                    skills3: 'Vue JS',
                    rate: '6000 USD',
                    country: 'Philippines',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                },
                {
                    talentID: 'KR-02053',
                    skills1: 'Project Management',
                    skills2: 'PHP',
                    skills3: 'Fullstack',
                    rate: '3000 USD',
                    country: 'Indonesia',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                },
                {
                    talentID: 'KR-02054',
                    skills1: 'Typescript',
                    skills2: 'Node.js',
                    skills3: 'Docker',
                    rate: '5000 USD',
                    country: 'Vietnam',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                  
                },
                {
                    talentID: 'KR-02055',
                    skills1: 'React JS',
                    skills2: 'JavaScript',
                    skills3: 'Docker',
                    rate: '4000 USD',
                    country: 'Sri Lanka',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM'
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'React JS',
                    skills2: 'JavaScript',
                    skills3: 'PHP',
                    rate: '7000 USD',
                    country: 'Philippines',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'JavaScript',
                    skills2: 'Bootstrap',
                    skills3: 'CSS',
                    rate: '5000 USD',
                    country: 'JavaScript',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'React JS',
                    skills2: 'JavaScript',
                    skills3: 'PHP',
                    rate: '7000 USD',
                    country: 'Philippines',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'JavaScript',
                    skills2: 'Bootstrap',
                    skills3: 'CSS',
                    rate: '5000 USD',
                    country: 'Indonesia',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'Agile',
                    skills2: 'Python',
                    skills3: 'Rest API',
                    rate: '6400 USD',
                    country: 'Vietnam',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM'
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'Project Management',
                    skills2: 'Vue.js',
                    skills3: 'CSS',
                    rate: '4500 USD',
                    country: 'Sri Lanka',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'React JS',
                    skills2: 'JavaScript',
                    skills3: 'PHP',
                    rate: '2200 USD',
                    country: 'Indonesia',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                   
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'React JS',
                    skills2: 'JavaScript',
                    skills3: 'PHP',
                    rate: '2200 USD',
                    country: 'Indonesia',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                   
                   
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'React JS',
                    skills2: 'JavaScript',
                    skills3: 'PHP',
                    rate: '2200 USD',
                    country: 'Indonesia',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                   
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'React JS',
                    skills2: 'JavaScript',
                    skills3: 'PHP',
                    rate: '2200 USD',
                    country: 'Indonesia',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                   
                },
                {
                    talentID: 'KR-02056',
                    skills1: 'React JS',
                    skills2: 'JavaScript',
                    skills3: 'PHP',
                    rate: '2200 USD',
                    country: 'Indonesia',
                    cvImage: require('../CandidateDatabase/images/Vector.jpg'),
                    schedule: '12 SEP | 10:35 AM',
                    more:'more'
                   
                },

            ]
        }
    }
}
</script>
<style>
.start {
    background: #FFFFFF;
    width: 1394px;
    padding: 16px;
}

.component-search {
    gap: 14px;
    display: flex;
    align-items: center;
}

.component-search input {
    width: 1127px;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #C9C9C9;
    border: 1px solid #EDEDED;
    border-radius: 2px;
}

.filter1 {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 14px;
    width: 96px;
    height: 42px;
    color: #FFFFFF;
}

.filter-imgg {
    margin-top: -2px;
}

.form-check1 {
    display: flex;
    padding: 0px;
    gap: 8px;
    width: 109px;
    height: 24px;
}

.sgd {
    width: 24px;
    height: 20px;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #8C8C8C;
}

.usd {
    width: 25px;
    height: 20px;
    font-family: 'RubikMedium';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 170%;
    display: flex;
    color: #6D6D6D;
}

/* table */
.data {
    margin-top: 14px;
    border: 1px solid #EDEDED;
}

.data thead {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #27304C;
    background: #FAFAFA;

}

.badge {
    justify-content: center;
    margin-right: 8px;
}

.data td {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #6D6D6D;
}

.data tr:nth-child(even) {
    background: #FAFAFA
}

.btnGroup .btn {
    margin-right: 14px;
}

.data .badge{
    height: 26px;
}
.butt{
    width: 132px;
}
.btnGroup{
    color: #A8B2BA;
}

/* end table */
</style>