import connection from '../../../connection/database.ts';
export async function index(req: any, res: any) {
    connection.query('select * from m_user_tab where isactive = 1', (err, result) => {
        if (err) throw err;
        res.json();
    });
}

export async function store(req: any, res: any) {
    const maps = {
        m_company_tab_id: req.body.m_company_tab_id,
        token: req.body.token,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        m_status_tab_id: req.body.m_status_tab_id,
        m_access_tab_id: req.body.m_access_tab_id,
        isactive: req.body.isactive,
        created_at: new Date(),
        updated_at: new Date(),
    };
    connection.query('INSERT INTO m_user_tab SET?', maps, (err, result) => {
        if (err) throw err;
        res.json();
    });
}

export async function show(req: any, res: any) {
    connection.query(`select * from m_user_tab where id = ${req.body.id}`, (err, result) => {
        if (err) throw err;
        res.json();
    });
}

export async function update(req: any, res: any) {
    connection.query(`UPDATE m_user_tab SET where id = ${req.body.id}`, (err, result) => {
        if (err) throw err;
        res.json({
            'error_code': null,
            'message': 'USER ME',
            'data': result
        });
    });
}

export async function destroy(req: any, res: any) {
    connection.query(`DELETE m_user_tab SET where id = ${req.body.id}`, (err, result) => {
        if (err) throw err;
        res.json({
            'error_code': null,
            'message': 'USER ME',
            'data': result
        });
    });
}