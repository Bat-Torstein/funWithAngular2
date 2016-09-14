export const htmlTemplate = `

<div class="col-md-3" >
    <list></list>
</div>
<div class="col-md-9">
</div>
<div class="col-md-12">
    <button class="btn-default" (click)="alert.open()">Alert!</button>
    <div class="row">
        <modal #alert>
            <modal-header>
                <h1>I am first modal</h1>
            </modal-header>
            <modal-content>
                Jau jau jau
            </modal-content>
            <modal-footer>
                <button class="btn btn-primary" (click)="alert.close()">okay!</button>
            </modal-footer>
        </modal>
    </div>
</div>

`;